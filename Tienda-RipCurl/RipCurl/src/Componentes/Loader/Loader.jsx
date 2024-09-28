import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div>
        <Spinner className='position-absolute top-50 start-50'  animation="border" size='xxl' variant='dark'/>
    </div>
  )
}

export default Loader