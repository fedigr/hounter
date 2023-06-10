export function Home(){
    let d = 10;
    function fedi(){
        let arr = [];
        let n =0;
        while(n<d){
            arr.push(<div className="carousel-item fedi"></div>)
            n++;
        }
        return arr;
    }
    return(
        <main>

        </main>
    )
}