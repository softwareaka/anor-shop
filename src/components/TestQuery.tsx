import { useProducts } from '../hooks/useProducts'

export const TestQuery = () => {
  const { data, isLoading, isError } = useProducts()

  if (data) {
    console.log(data)
  }

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
