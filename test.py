def isValid(s: str):
    stack = []
    pair = { ")":"(", "}":"{", "]":"[" }
    
    for c in s:
        if c in pair:
            
            #"if stack" here just verifies that the stack isn't empty!
            if stack and stack[-1] == pair[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
    return True if not stack else False

print(isValid("()[]{}"))
