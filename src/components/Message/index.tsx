import { useParams } from 'react-router-dom'
import Error from './Error'
import Text from './Text'

const Message = () => {
  const { code } = useParams()

  const regex =
    /([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})/

  if (!(code && regex.test(code) && code.length === 19)) {
    return <Error />
  }

  return <Text code={code} />
}

export default Message
