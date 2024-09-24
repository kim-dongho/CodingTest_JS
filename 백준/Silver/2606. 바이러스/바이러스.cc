#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>
#include <string.h>
using namespace std;

int bfs(int start, bool c[], vector<int> a[])
{
	int count = -1;
	queue<int> q;
	q.push(start);
	c[start] = true;
	
	while(!q.empty())
	{
		int x = q.front();
		q.pop();
		count++;
		for(int i = 0; i < a[x].size(); i++)
		{
			int y = a[x][i];
			if(!c[y])
			{
				q.push(y);
				c[y] = true;
			}
		}
	}
	return count;
}

int main()
{
	int node, s;
	
	cin >> node;
	cin >> s;
	
	vector<int> c[node+1];
	bool check[node+1];
	memset(check,false,sizeof(check));
	
	for(int i = 0; i < s; i++)
	{
		int a,b;
		cin >> a >> b;
		c[a].push_back(b);
		c[b].push_back(a);
	}
	
	for(int i = 1; i <= node; i++)
	{
		sort(c[i].begin(), c[i].end());
	}
	
	int count = bfs(1,check,c);
	
	cout << count;
}