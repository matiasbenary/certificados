type TextProps = {
  code: string
}

const Text = ({ code }: TextProps) => {
  return (
    <div className="bg-gray-100 py-5 pl-6">
      <p>
        Esta credencial fue entregada a Daniela Zamudio el 16 de diciembre de
        2021
      </p>
      <p> Código: {code}</p>
    </div>
  )
}

export default Text
