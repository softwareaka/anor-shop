let str = 'bitcoin take over the world maybe who knows perhaps'

function findTheLowestLenght(string) {
  let splitStr = str.split(' ')

  let result = Math.min(
    ...splitStr.map((item) => {
      return item.length
    })
  )

  console.log(result)
}

findTheLowestLenght(str)
