const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }
    

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    
    return ( 
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={handleClickAgain('Mario')}>Click me again</button> */}
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;