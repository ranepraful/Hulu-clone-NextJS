import Thumbnail from "./Thumbnail"


function Results({results}) {
    console.log(results)
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-row flex-wrap justify-center ">
        {
            results.map(result => {
                
                return <Thumbnail key={result.id} result={result} />
            })
        }
      
    </div>
  )
}

export default Results
