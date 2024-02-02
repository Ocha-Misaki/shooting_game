const body = document.querySelector("body")
const container = document.getElementsByClassName("container")[1]
const contHeight = (container.style.height = 300)
const contWidth = (container.style.width = 300)

const pElement = document.createElement("p")
pElement.textContent = `残り20秒`
const scorePElement = document.createElement("p")
scorePElement.textContent = `スコア: `
const buttonElement = document.createElement("button")
buttonElement.classList.add("btn")
buttonElement.classList.add("btn-primary")
buttonElement.textContent = "ゲームスタート"
body.appendChild(scorePElement)
body.appendChild(pElement)
body.appendChild(buttonElement)

const enemyImg = document.createElement("img")
enemyImg.src = "/assets/setsubun_kurooni.png"
enemyImg.style.position = "absolute"
enemyImg.style.height = "200px"
enemyImg.style.width = "200px"

const pigeonImg = document.createElement("img")
pigeonImg.src = "/assets/hato.png"
pigeonImg.style.position = "absolute"
pigeonImg.style.height = "200px"
pigeonImg.style.width = "200px"

const imgHeight = 20
const imgWidth = 20
const imgArray = [enemyImg, pigeonImg]

const enemyAudio = document.createElement("audio")
enemyAudio.src = "/assets/Quiz-Correct_Answer02-1.mp3"

const buzzerAudio = document.createElement("audio")
buzzerAudio.src = "/assets/Buzzer02-2.mp3"

let score = 0

const startTimer = (seconds, gameIntervalId) => {
  const startTime = Date.now()
  const endTime = startTime + seconds * 1000
  let intervalId = setInterval(() => {
    const currentTime = Date.now()
    const restTime = Math.ceil((endTime - currentTime) / 1000)
    pElement.textContent = `残り${restTime}秒`
    if (restTime < 1) {
      clearInterval(intervalId)
      clearInterval(gameIntervalId)
      alert(`あなたのスコアは${score}でした！`)
      sendScore(score)
      location.reload()
    }
  }, 1000)
}

const clickEnemy = () => {
  window.addEventListener("click", (e) => {
    if (e.target === enemyImg) {
      enemyAudio.currentTime = 0
      enemyAudio.play()
      score += 10
    } else if (e.target === pigeonImg) {
      buzzerAudio.currentTime = 0
      buzzerAudio.play()
      score -= 10
    }
    scorePElement.textContent = `スコア: ${score}`
  })
}

const shuffleImg = () => {
  let randNum = Math.floor(Math.random() * 2)
  return imgArray[randNum]
}

const setGame = () => {
  let gameIntervalId = setInterval(() => {
    container.appendChild(shuffleImg())
    let randTop = Math.random() * (contHeight - imgHeight)
    let randWidth = Math.random() * (contWidth - imgWidth)
    shuffleImg().style.top = randTop + "px"
    shuffleImg().style.left = randWidth + "px"
  }, 500)
  clickEnemy(1000)
  startTimer(10, gameIntervalId)
}

const sendScore = (score) => {
  fetch("/users/:user_id/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": getCsrfToken(),
    },
    body: JSON.stringify({result: score}),
  })
    .then((response) => {
      if (response.ok) {
        console.log("スコアが正常に送信されました")
      } else {
        console.error("スコアの送信中にエラーが発生しました")
      }
    })
    .catch((error) => {
      console.error("通信エラー:", error)
    })
}

const getCsrfToken = () => {
  const metas = document.getElementsByTagName("meta")
  for (let meta of metas) {
    if (meta.getAttribute("name") === "csrf-token") {
      console.log("csrf-token:", meta.getAttribute("content"))
      return meta.getAttribute("content")
    }
  }
  return ""
}

buttonElement.addEventListener("click", () => {
  buttonElement.disabled = true
  setGame()
})
