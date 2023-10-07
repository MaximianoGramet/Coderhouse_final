import 'bootstrap/dist/css/bootstrap.min.css';

function Body({saludos}) {
  return (
    <>     
        <h1 className='bg-danger h-200 text-center'>{saludos} </h1>
    </>
  )
}

export default Body