#!/usr/bin/env python3


class Queue:

    def __init__(self):
        self.data = []

    def enqueue(self, elem):
        self.data.insert(0, elem)

    def dequeue(self):
        return self.data.pop()

    def peek(self):
        try:
            return self.data[-1]
        except:
            return None
