import json
import sys

with open('.codesweave/design-task.json', 'r') as f:
    data = json.load(f)

frame_idx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
frame = data['frames'][frame_idx]

print(f"Frame: {frame['name']}")
print(f"ID: {frame['frameId']}")
print(f"File: {frame['suggestedFilePath']}")
print(f"Dimensions: {frame['prunedNodeTree']['absoluteBoundingBox']}")

def extract_nodes(node, depth=0):
    indent = "  " * depth
    node_type = node.get('type', 'UNKNOWN')
    node_name = node.get('name', 'Unnamed')

    print(f"{indent}- {node_type}: {node_name}")

    if 'layoutMode' in node:
        print(f"{indent}  Layout: {node['layoutMode']}")
    if 'itemSpacing' in node:
        print(f"{indent}  Gap: {node['itemSpacing']}")
    if 'paddingLeft' in node or 'paddingTop' in node:
        padding = {
            'top': node.get('paddingTop', 0),
            'right': node.get('paddingRight', 0),
            'bottom': node.get('paddingBottom', 0),
            'left': node.get('paddingLeft', 0)
        }
        print(f"{indent}  Padding: {padding}")

    if 'children' in node and depth < 4:
        for child in node['children'][:10]:
            extract_nodes(child, depth + 1)

extract_nodes(frame['prunedNodeTree'])
