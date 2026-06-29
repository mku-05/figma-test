import json
import os

with open('.codesweave/design-task.json', 'r') as f:
    data = json.load(f)

os.makedirs('.codesweave/frame-tasks', exist_ok=True)

for i, frame in enumerate(data['frames']):
    frame_id = frame['frameId'].replace(':', '_')
    filename = '.codesweave/frame-tasks/frame-' + str(i) + '-' + frame_id + '.json'
    with open(filename, 'w') as f:
        json.dump(frame, f, indent=2)
    size_kb = os.path.getsize(filename) / 1024
    print('Saved ' + frame['name'] + ' to ' + filename)
    print('  Size: ' + str(round(size_kb, 1)) + ' KB')
