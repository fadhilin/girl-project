const btn = document.getElementById("playBtn");
const audio = document.getElementById("myAudio");

btn.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});
var umur = confirm("apakah umur kamu lebih dari 18 tahun?");
if (umur === true) {
  var nama = prompt("cie udah gede, sekarang masukkan nama kamu:");
  alert(
    "Halo" +
      " " +
      nama +
      " " +
      ",website ini dibuat dengan penuh rasa cinta dan kasih sayang,sebelum menjelajah web ini jangan lupa klik audio dipojok kiri atas yaa lope uuu " +
      " " +
      nama +
      ">3"
  );
} else {
  alert(
    "maaf kamu belum cukup umur 😝, tapi gapapa deh nanti nangis silahkan jelajahi website ini jangan lupa klik audio dipojok kiri atas yaa adekk"
  );
}
