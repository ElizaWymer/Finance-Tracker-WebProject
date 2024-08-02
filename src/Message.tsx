function Message() 
{
    const name = "Elizabeth";
    if (name)
        return <h1>I'm {name}!!! </h1>;
    return <h1> Hello World!</h1>;
}

export default Message;