#!/usr/bin/env python3
"""Extract detailed component data for React generation"""
import json

def extract_text(node):
    """Extract text content from node"""
    return node.get('characters', '')

def extract_fills(node):
    """Extract fill colors"""
    fills = node.get('fills', [])
    if not fills:
        return None
    for fill in fills:
        if fill.get('type') == 'SOLID':
            color = fill.get('color', {})
            r, g, b = color.get('r', 0), color.get('g', 0), color.get('b', 0)
            a = fill.get('opacity', color.get('a', 1))
            return f"rgba({int(r*255)},{int(g*255)},{int(b*255)},{a})"
    return None

def describe_node(node, depth=0):
    """Create description of node"""
    indent = "  " * depth
    node_type = node.get('type', 'UNKNOWN')
    node_name = node.get('name', 'unnamed')

    result = []
    result.append(f"{indent}{node_type}: {node_name}")

    # Layout
    layout_mode = node.get('layoutMode')
    if layout_mode:
        spacing = node.get('itemSpacing', 0)
        pt = node.get('paddingTop', 0)
        pr = node.get('paddingRight', 0)
        pb = node.get('paddingBottom', 0)
        pl = node.get('paddingLeft', 0)
        result.append(f"{indent}  Layout: {layout_mode}, spacing={spacing}, padding={pt}/{pr}/{pb}/{pl}")

    # Text
    text = extract_text(node)
    if text:
        result.append(f"{indent}  Text: \"{text}\"")

    # Fill color
    fill = extract_fills(node)
    if fill:
        result.append(f"{indent}  Fill: {fill}")

    # Process children
    children = node.get('children', [])
    for child in children:
        result.extend(describe_node(child, depth + 1))

    return result

# Load and process
with open('.codesweave/design-task.json') as f:
    data = json.load(f)

frame = data['frames'][0]
print(f"=== {frame['name']} ===\n")
print('\n'.join(describe_node(frame['prunedNodeTree'])))

# Also extract SVG assets mapping
print("\n\n=== SVG Assets ===")
def list_assets(node, parent_path=""):
    """List all nodes with potential SVG exports"""
    node_id = node.get('id', '')
    node_name = node.get('name', '')
    node_type = node.get('type', '')

    path = f"{parent_path}/{node_name}" if parent_path else node_name

    # Check if this node might have an SVG export
    if node_type in ['VECTOR', 'FRAME', 'INSTANCE'] and node_id:
        # Convert Figma node ID format to file format
        file_id = node_id.replace(':', '-').replace(';', '_')
        print(f"{path} -> {file_id}.svg")

    for child in node.get('children', []):
        list_assets(child, path)

list_assets(frame['prunedNodeTree'])
