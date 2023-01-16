var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    if (content == "tire minha selfie"){
        console.log("tirando selfie")
        speak()
    }
    document.getElementById("textbox").innerHTML = content
}
function speak(){
    var synth = window.speechSynthesis
    speakData = document.getElementById("textbox").value
    var utteerThis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utteerThis)
    Webcam.attach(camera)
    setTimeout(function (){
        takeSelfie() 
        save()
    },5000)
}
camera = document.getElementById("camera")
Webcam.set({
    width : 360,
    height :250,
    image_format : "jpeg",
    jpeg_quality : 90
})
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id = "selfieImage"src = "'+data_uri+'"/>'
    })
}
function save(){
    link = document.getElementById("resultado")
    image = document.getElementById("selfieImage").src 
    link.href = image 
    link.click()
}



