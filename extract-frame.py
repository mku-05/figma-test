#!/usr/bin/env python3
"""Extract detailed frame structure from design-task.json"""
import json
import sys

def print_node(node, depth=0, max_depth=4):
    """Recursively print node structure"""
    indent = "  " * depth
    node_type = node.get('type', 'UNKNOWN')
    node_name = node.get('name', 'unnamed')
    node_id = node.get('id', 'no-id')

    # Layout info
    layout_mode = node.get('layoutMode', '')
    item_spacing = node.get('itemSpacing', '')
    padding = f"p:{node.get('paddingTop', 0)}/{node.get('paddingRight', 0)}/{node.get('paddingBottom', 0)}/{node.get('paddingLeft', 0)}"

    # Size info
    bounds = node.get('absoluteBoundingBox', {})
    size = f"{bounds.get('width', 0)}x{bounds.get('height', 0)}"

    # Text content
    characters = node.get('characters', '')
    if characters:
        characters = f" text=\"{characters[:50]}...\""

    print(f"{indent}{node_type}: {node_name} [{node_id}] {size}")
    if layout_mode:
        print(f"{indent}  layout={layout_mode} spacing={item_spacing} {padding}")
    if characters:
        print(f"{indent}  {characters}")

    # Print fills/strokes if present
    if node.get('fills'):
        print(f"{indent}  fills={len(node.get('fills', []))}")

    # Recurse into children
    if depth < max_depth:
        children = node.get('children', [])
        if children:
            print(f"{indent}  [{len(children)} children]")
            for child in children:
                print_node(child, depth + 1, max_depth)

# Load data
with open('.codesweave/design-task.json') as f:
    data = json.load(f)

frame = data['frames'][0]
print(f"=== Frame: {frame['name']} ===")
print(f"Suggested path: {frame['suggestedFilePath']}\n")

print_node(frame['prunedNodeTree'])
