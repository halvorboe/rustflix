

let video = document.querySelector('video');

function base64_to_buffer(i) {
  let bin = window.atob(i)
  let len = bin.length;
  let bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
      bytes[i] = bin.charCodeAt(i)
  }
  return bytes.buffer
}  


let ws = new WebSocket("ws:127.0.0.1:3012")

ws.onopen = () => {
  ws.send("Here's some text that the server is urgently awaiting!"); 
};

ws.onmessage = (message) => {

  console.log(message)

  let blob = message.data

  blob.type = "text/plain"

  console.log(blob)

  var reader = new FileReader();
  reader.onload = function() {
      video.src = "data:video/mp4;base64," + message.data
  }
  reader.readAsText(message);
  



}



// let video = 

      // var video = document.querySelector('video');

      // var assetURL = 'video.mp4';
      // // Need to be specific for Blink regarding codecs
      // // ./mp4info frag_bunny.mp4 | grep Codec
      // var mimeCodec = 'video/mp4';

      // if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      //   var mediaSource = new MediaSource();
      //   //console.log(mediaSource.readyState); // closed
      //   video.src = URL.createObjectURL(mediaSource);
      //   mediaSource.addEventListener('sourceopen', sourceOpen);
      // } else {
      //   console.error('Unsupported MIME type or codec: ', mimeCodec);
      // }

      // function sourceOpen (_) {
      //   //console.log(this.readyState); // open
      //   var mediaSource = this;
      //   var fileToLoad = this.files[0];
      //   var fileReader = new FileReader();
      //   fileReader.onload = function(fileLoadedEvent){
      //         var textFromFileLoaded = fileLoadedEvent.target.result
      //         sourceBuffer.appendBuffer(textFromFileLoaded);
      //   };
      //   fileReader.readAsText(fileToLoad, 'base64');
      //   sourceBuffer.addEventListener('updateend', function (_) {
      //     mediaSource.endOfStream();
      //     video.play();
      //   });
      //   sourceBuffer.appendBuffer(base64toBuffer());
      //   });
      // };

      // function base64toBuffer(base64) {
      //     var binary_string =  window.atob(base64);
      //     var len = binary_string.length;
      //     var bytes = new Uint8Array( len );
      //     for (var i = 0; i < len; i++)        {
      //         bytes[i] = binary_string.charCodeAt(i);
      //     }
      //     return bytes.buffer;
      // }

      //   // let open = (_) => {
      //   //   let mediaSource = this
      //   //   let sourceBuffer = mediaSource.addSourceBuffer('video/mp4; base64')
      //   //   sourceBuffer.addEventListener('updateend', function (_) {
      //   //     mediaSource.endOfStream();
      //   //     video.play();
      //   //     //console.log(mediaSource.readyState); // ended
      //   //   });
      //   //   let control = document.getElementById('file');
      //   //   control.addEventListener('change', function(event) {
      //   //         var fileToLoad = this.files[0];
      //   //         var fileReader = new FileReader();
      //   //         fileReader.onload = function(fileLoadedEvent){
      //   //               var textFromFileLoaded = fileLoadedEvent.target.result
      //   //               sourceBuffer.appendBuffer(textFromFileLoaded);
      //   //         };
      //   //         fileReader.readAsText(fileToLoad, 'base64');
      //   //   }, false);
      //   // }

      //   // let mediaSource = new MediaSource();
      //   // let video = document.querySelector('video')
      //   // //console.log(mediaSource.readyState); // closed
      //   // video.src = URL.createObjectURL(mediaSource);
      //   // mediaSource.addEventListener('sourceopen', open);