import sys

data = sys.stdin.read().strip().split()
N = int(data[0])
nums = list(map(int, data[1:]))

balloons = [(i + 1, nums[i]) for i in range(N)]
ans = []

# 첫 풍선 터뜨리기
idx = 0
num, k = balloons.pop(0)
ans.append(str(num))

while balloons:
    if k > 0:
        idx = (idx + k - 1) % len(balloons)
    else:
        idx = (idx + k) % len(balloons)

    num, k = balloons.pop(idx)
    ans.append(str(num))

print(" ".join(ans))