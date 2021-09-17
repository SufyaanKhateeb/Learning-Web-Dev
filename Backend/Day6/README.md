# How is javascript run outside the browser?
    Using Google's V8 Javascript Engine. Two main things provided by it: 1. Heap 2. Stack

Rest of the stuff i.e. Event Loop, Callback Queue, APIs and more is contained by Javascript itself and not the V8 engine. This was done to not make JS dependent on V8 only and allow it to be browser independent.


# Event Loop:
    It is something that keeps running continuously and checks the Main stack, if it has any frames to execute, if not then it checks Callback queue, if Callback queue has codes to execute then it pops the message from it to the Main Stack for the execution.
# Callback Queue:
    It is a queue that stores the codes to execute when the Event Loop is idle. This is where your asynchronous code gets pushed to, and waits for the execution.
<img src="https://miro.medium.com/max/875/1*iHhUyO4DliDwa6x_cO5E3A.gif">

## Main Stack:
    This is where all your javascript code gets pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done. If your statement is asynchronous: setTimeout, ajax(), promise, or click event, then that code gets forwarded to Event table, this table is responsible for moving your asynchronous code to callback/event queue after specified time.
## Heap:
    This is where all the memory allocation happens for your variables, that you have defined in your program.

Using the callback queue, asynchronous code is implemented in javascript. Even after being single threaded this is how it is possible to implement asynchronous code in javascript.
