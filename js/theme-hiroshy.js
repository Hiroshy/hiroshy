// https://web.whatsapp.com/send?phone=+5215535688499
let wsp_btn=document.getElementById("whatsapp");

function whatsappOk() {
	if(screen.width<500){
		wsp_btn.setAttribute('href','https://api.whatsapp.com/send?phone=5215620222283&text=¡Hola! Vi tu portafolio y me encantaria contactárte')
	}else{
		wsp_btn.setAttribute('href','https://web.whatsapp.com/send?phone=+5215620222283&amp;text=¡Hola! Vi tu portafolio y me encantaria contactárte')
	}
}

window.addEventListener("load",()=>{
	whatsappOk()
})

window.addEventListener("resize",whatsappOk)