;(() => {
  const generateAllParentheses = (n) => {
    const bracketOpen = "("
    const bracketClose = ")"
    let backet = ""
    let array = []
    const createBacket = (n, countClose, countOpen, backet) => {
      if (countOpen === 0 && countClose === 0 && backet.length === n * 2) {
        array.push(backet)
      }
      if (countOpen > 0 && countOpen <= n) {
        createBacket(n, countClose, countOpen - 1, backet + bracketOpen)
      }
      if (countClose > 0 && countClose <= n) {
        createBacket(n, countClose - 1, countOpen, backet + bracketClose)
      }
    }
    createBacket(n, n, n, backet)

    return array
  }
  const checkWellFormedParentheses = (n) =>
    generateAllParentheses(n).filter((backet) => {
      const charArr = backet.split("")
      let count = 0
      charArr.forEach((char) => {
        if (char === "(") {
          count += 1
        } else {
          if (count == 0) {
            return false
          } else {
            count -= 1
          }
        }
      })
      if (!count) {
        return backet
      }
    })

  const generateWellFormedParentheses = (n) => {
    const bracketOpen = "("
    const bracketClose = ")"
    let backet = ""
    let array = []
    const createBacket = (n, countClose, countOpen, backet) => {
      if (countOpen === 0 && countClose === 0 && backet.length === n * 2) {
        array.push(backet)
      }
      if (countOpen > 0 && countOpen <= n) {
        createBacket(n, countClose, countOpen - 1, backet + bracketOpen)
      }
      if (countClose > 0 && countClose > countOpen) {
        createBacket(n, countClose - 1, countOpen, backet + bracketClose)
      }
    }
    createBacket(n, n, n, backet)

    return array
  }

  console.log(
    "Generte Well fromed Parentheses",
    generateWellFormedParentheses(3),
  )
  console.log(
    "After check Well formed Parentheses",
    checkWellFormedParentheses(3),
  )
})()
