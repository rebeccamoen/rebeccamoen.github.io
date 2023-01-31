/*!
 * Copyright (c) 2022 Oracle and/or its affiliates.
 * All rights reserved. Oracle Digital Assistant Client Web SDK, Release: 22.10.0
 */

var e,factory
e = self, factory = function () {return function () {'use strict';var e = {216: function (e, t, s) {var i
          s.d(t, {a: function () {return _},b: function () {return v},c: function () {return i},d: function () {return o}}), function (e) {e.DE_DE = 'de-de', e.EN_AU = 'en-au', e.EN_GB = 'en-gb', e.EN_IN = 'en-in', e.EN_US = 'en-us', e.ES_ES = 'es-es', e.FR_FR = 'fr-fr', e.HI_IN = 'hi-in', e.IT_IT = 'it-it', e.PT_BR = 'pt-br'}(i || (i = {}));const n = Object.keys(i).map((e => i[e]))
          function o (e) {return n.indexOf(e) >= 0}var a
          !function (e) {e[e.Connecting = 0] = 'Connecting', e[e.Open = 1] = 'Open', e[e.Closing = 2] = 'Closing', e[e.Closed = 3] = 'Closed'}(a || (a = {}));var r = s(301)
          const c = window.audioinput
          function l () {return c}function h (e) {return new Promise(((e, t) => {
              const s = l()
              s.checkMicrophonePermission((i => {
                i ? e() : s.getMicrophonePermission(((s, i) => {
                  s ? e() : t(i)}))}))})).then((() => {
              const t = l()
              return t.start(e), t}))}function d () {return new Promise((e => {
              const t = l()
              t.isCapturing() ? (t.stop(e), t.disconnect()) : e()}))}let p = window.AudioContext
          const u = window.navigator
          let g = u.mediaDevices
          const m = u.webkitGetUserMedia,f = u.mozGetUserMedia,b = !!(g && g.getUserMedia || m || f)
          var v
          !function (e) {e.RecognitionNotAvailable = 'RecognitionNotAvailable', e.RecognitionNotReady = 'RecognitionNotReady', e.RecognitionNoAPI = 'RecognitionNoAPI', e.RecognitionProcessingFailure = 'RecognitionProcessingFailure', e.RecognitionTooMuchSpeechTimeout = 'RecognitionTooMuchSpeechTimeout', e.RecognitionNoSpeechTimeout = 'RecognitionNoSpeechTimeout', e.RecognitionMultipleConnection = 'RecognitionMultipleConnection'}(v || (v = {}));var w = function (e, t, s, i) {return new (s || (s = Promise))((function (n, o) {function a (e) {try {c(i.next(e))} catch(e) {o(e) }}function r (e) {try {c(i.throw(e))} catch(e) {o(e) }}function c (e) {var t
                e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s((function (e) {e(t)}))).then(a, r)}c((i = i.apply(e, t || [])).next())}))}
          const x = 4096,C = 48e3
          let S,y = !0
          class _ {
            constructor () {this._streamBuffer = [], this._isRecording = !1, p = p || window.webkitAudioContext, b && (void 0 === g && (g = {}), void 0 === g.getUserMedia && (g.getUserMedia = e => {
                const t = m || f
                if (!t) {const e = Error('getUserMedia is not implemented in this browser')
                  return e.name = 'TypeError', Promise.reject(e)}return new Promise(((s, i) => {
                  t.call(navigator, e, s, i)}))}))}
            static getInstance () {return this._service || (this._service = new _), this._service}
            startRecognition (e) {var t,s
              return this._startPromise = new r.c, e && (this._onRecognitionText = e.onRecognitionText, this._onAnalyserReady = e.onAnalyserReady, this._onVisualData = e.onVisualData, this._onSpeechNetworkChange = e.onSpeechNetworkChange), (null === (t = this._connection) || void 0 === t ? void 0 : t.readyState) === a.Closing || (null === (s = this._connection) || void 0 === s ? void 0 : s.readyState) === a.Connecting ? Promise.reject(new Error(v.RecognitionMultipleConnection)) : (this._isRecording ? this._startPromise.resolve() : this._url ? this._setupRecognition() : this._buildServerURL().then((() => this._setupRecognition())), this._startPromise.promise)}
            stopRecognition () {return this._stopPromise = new r.c, this._isRecording ? this._stopProcessing() : this._stopPromise.resolve(), this._stopPromise.promise}
            setConfig (e) {return e.recognitionLocale || (e.recognitionLocale = i.EN_US), e.tokenGenerator && (this._authService = r.b.getInstance()), this._config = e, this._buildServerURL()}
            setLocale (e) {o(e) && this._config && (this._config.recognitionLocale = e, this._buildServerURL())}
            _setConnectionState (e) {var t
              null === (t = this._onSpeechNetworkChange) || void 0 === t || t.call(this, e)}
            _buildServerURL () {return (e = this._config, t = this._authService, new Promise(((s, i) => {
                e.tokenGenerator ? t.get().then((t => {
                  e.channelId = t.getClaim('channelId'), e.userId = t.getClaim('userId'), k(e, s, i)})).catch((e => i(e))) : k(e, s, i)}))).then((e => {
                this._url = e}));var e,t}
            _setupRecognition () {return new Promise(((e, t) => {
                b ? function (e, t) {navigator.mediaDevices.getUserMedia({audio: !0}).then((t => {
                    const s = new AudioContext
                    e({context: s,stream: s.createMediaStreamSource(t)})})).catch((() => {
                    t(Error(v.RecognitionNoAPI))}))}(e, t) : void 0 !== l() ? function (e, t) {d().then((() => h({audioSourceType: 6,bufferSize: x,streamToWebAudio: !0}).then((t => {
                    e({context: l().getAudioContext(),stream: t})})))).catch((() => {
                    t(Error(v.RecognitionNoAPI))}))}(e, t) : t(Error(v.RecognitionNoAPI))})).then((e => {
                let t
                this._streamBuffer = [], S = new Float32Array(0), this._connection = this._getSpeechServerConnection(this._url), function (e, t, s) {return w(this, void 0, void 0, (function * () {const i = e.createAnalyser()
                    i.smoothingTimeConstant = .8, i.fftSize = 256;const n = "class RecorderProcessor extends AudioWorkletProcessor {\n        buffersize = 4096;\n    \n        // Track the current buffer fill level\n        _bytesWritten = 0;\n    \n        // Create  a buffer of fixed size\n        _buffer = new Float32Array(this.buffersize);\n    \n        constructor() {\n            super();\n            this.initBuffer();\n        }\n    \n        initBuffer() {\n            this._bytesWritten = 0;\n        }\n    \n        isBufferEmpty() {\n            return this._bytesWritten === 0;\n        }\n    \n        isBufferFull() {\n            return this._bytesWritten === this.buffersize;\n        }\n    \n        flush() {\n            // trim the buffer if ended prematurely\n            this.port.postMessage(\n                this._bytesWritten < this.buffersize ? this._buffer.slice(0, this._bytesWritten) : this._buffer\n            );\n            this.initBuffer();\n        }\n    \n        process(inputs) {\n            this.append(inputs[0][0]);\n    \n            return true;\n        }\n    \n        /**\n         * \n         * @param {Float32Array} channelData \n         * @returns \n         */\n        append(channelData) {\n            if (this.isBufferFull()) {\n                this.flush();\n            }\n    \n            if (!channelData) return;\n    \n            for (let i = 0; i < channelData.length; i++) {\n                this._buffer[this._bytesWritten++] = channelData[i];\n            }\n        }\n    }\n    \n    registerProcessor('recorder.worklet', RecorderProcessor);",o = URL.createObjectURL(new Blob([n], {type: 'application/javascript'}))
                    yield e.audioWorklet.addModule(o);const a = new AudioWorkletNode(e, 'recorder.worklet')
                    return URL.revokeObjectURL(o), t.connect(i), i.connect(a), a.connect(e.destination), a.port.onmessage = s, {analyser: i,processor: a}}))}(e.context, e.stream, this._onPortMessage.bind(this)).then((s => {
                  t = s, this._onAnalyserReady && this._onAnalyserReady(t.analyser), this._context = e.context, this._stream = e.stream, this._analyser = t.analyser, this._audioWorklet = t.processor}))})).catch((e => {
                this._startPromise && this._startPromise.reject(e)}))}
            _getSpeechServerConnection (e) {const t = new WebSocket(e)
              return t.onopen = this._onOpen.bind(this), t.onclose = this._onClose.bind(this), t.onmessage = this._onMessage.bind(this), t.onerror = this._onError.bind(this), t}
            _onOpen () {
              this._config.tokenGenerator ? this._authService.get().then((e => {
                this._connection.send(`Bearer ${e.token}`), this._setConnectionState(a.Open), this._sendPreConnectionBuffer()})) : (this._setConnectionState(a.Open), this._sendPreConnectionBuffer())}
            _onClose () {this._isRecording && this._stopProcessing(), this._stopPromise && (this._stopPromise.resolve(), this._stopPromise = void 0), this._setConnectionState(a.Closed)}
            _onMessage (e) {try {const t = JSON.parse(e.data)
                if (!t.event && t.code)throw e;const s = function (e) {let t,s
                  const i = e.requestId,n = e.nbest
                  return 'partialResult' === e.event ? (t = 'partial', s = n[0].utterance) : n && n.length ? (t = 'final', s = n[0].utterance) : (t = 'error', s = e.resultCode ? v.RecognitionTooMuchSpeechTimeout : v.RecognitionNoSpeechTimeout), {requestId: i,type: t,text: s,message: e}}(t)
                'finalResult' === t.event && this.stopRecognition(), this._onRecognitionText && this._onRecognitionText(s)} catch(e) {this._notifyError(v.RecognitionProcessingFailure), this.stopRecognition() }}
            _onError () {this._connection.readyState === a.Open && (this._notifyError(v.RecognitionProcessingFailure), this._connection.close())}
            _notifyError (e) {this._onRecognitionText && this._onRecognitionText({requestId: '',text: e,type: 'error'})}
            _onPortMessage (e) {var t
              this._startPromise && (this._isRecording = !0, this._startPromise.resolve(), this._startPromise = void 0);const s = e.data,i = (null === (t = this._context) || void 0 === t ? void 0 : t.sampleRate) || C
              try {const e = function (e, t, s) {if (s === t)return e;if (s > t)throw Error();let i = []
                  if (t === C)i = I
                  else {if (44100 !== t)throw Error();i = A}const n = t / s
                  let o,a,r
                  y ? (o = Math.floor(e.length % n), a = e.length - o, r = 0 === o ? Array.from(e) : e.slice(0, a)) : (o = Math.floor((e.length + S.length - i.length) % n), a = e.length + S.length - i.length - o, r = new Float32Array(S.length + a), r.set(S), r.set(e.slice(0, a), S.length));const c = Math.floor(a / n),l = new Int16Array(c),h = -1,d = 32767
                  if (t === C) for (let e = i.length;e < r.length;e += n) {let t = 0
                      for (let s = 0;s < i.length;s++)t += r[e - s] * i[s];const s = Math.max(Math.min(t, 1), h) * d
                      l[(e - i.length) / n] = s}
                  else {const e = []
                    for (let t = i.length;t < r.length;t++) {let s = 0
                      for (let e = 0;e < i.length;e++)s += r[t - e] * i[e];e[t - i.length] = s} for (let t = 0;t < c;t++) {const s = 3,i = t * n,o = Math.floor(i) - s + 1,a = Math.floor(i) + s
                      let r = 0
                      for (let t = o;t <= a;t++)r += (t < 0 ? e[0] : t >= e.length ? e[e.length - 1] : e[t]) * E(s, i - t);l[t] = Math.max(Math.min(r, 1), h) * d}}return S = y ? e.slice(a - i.length - S.length) : e.slice(a - i.length - (S.length - i.length)), y = !1, l.buffer}(s, i, 16e3)
                this._onVisualData && this._processAnalyser(this._analyser), this._sendBuffer(e)} catch(e) {this._notifyError(v.RecognitionProcessingFailure), this.stopRecognition() }}
            _processAnalyser (e) {if (e) {const t = new Uint8Array(e.frequencyBinCount)
                e.getByteFrequencyData(t), this._onVisualData && this._onVisualData(t)}}
            _sendBuffer (e) {
              this._connection.readyState !== a.Open || this._streamBuffer.length ? this._streamBuffer.push(e) : this._connection.send(e)}
            _sendPreConnectionBuffer () {if (this._connection.readyState === a.Open) for (;this._streamBuffer.length;) {const e = this._streamBuffer.shift()
                  e && this._connection.send(e)}}
            _stopProcessing () {var e,t
              this._isRecording = !1, this._connection && (this._connection.readyState === a.Open && (this._connection.send('Done'), this._connection.close()), this._audioWorklet && this._audioWorklet.disconnect(), this._analyser && this._analyser.disconnect(), l() ? d() : (e = this._context, (t = this._stream) && (t.mediaStream && t.mediaStream.getAudioTracks().forEach((e => {
                e.stop()})), t.disconnect()), e && e.close()), this._audioWorklet = void 0, this._analyser = void 0, this._stream = void 0, this._context = void 0, this._streamBuffer = [], y = !0, S = new Float32Array(0))}
          }
          const T = '/voice/stream/recognize'
          function k (e, t, s) {e.channelId && e.userId || s(Error(v.RecognitionNotReady)), t(function (e) {const t = `ws${e.isTLS?"s":""}://`,s = `${T}/${e.recognitionLocale}/generic`,i = {channelId: e.channelId || '',encoding: 'audio/raw',userId: e.userId || ''}
              return e.tokenGenerator && (i.jwtInBody = 'true'), (0, r.e)(t, e.URI, i, s)}(e))}const I = [-25033838264794034e-21, -3645156113737857e-20, -11489993827892933e-21, 393243788874656e-19, 6998419352067277e-20, 37556691270439976e-21, -476966455345305e-19, -.00011379935461751734, -8400957697117619e-20, 4208817777607469e-20, .00016391587447478332, .00015508372993570357, -1253765788919669e-20, -.00021258262011091092, -.0002524059896175195, -51874329668708116e-21, .0002479230009768214, .00037351534477673157, .00016157590781788105, -.0002541085239198603, -.000510486865332593, -.0003246104617540939, .00021219136947965464, .0006488877825604561, .0005444416935293036, -.0001016639071691704, -.0007673001147209819, -.0008176720912938691, -972696982411551e-19, .0008376185852528038, .0011319450250252222, .0004008193339799052, -.0008262743020160207, -.0014643282305934196, -.0008183365045047033, .0006964471772153777, .001780467922489105, .0013489288090360295, -.00041122152287042, -.0020347535966250413, -.0019782994815083733, -6247794246099269e-20, .002171643809964705, .0026761621389245617, .00074944268608935, -.00212817775887288, -.003394541347147186, -.0016615884301227524, .001837545335885159, .004067170702246546, .0027936171643976352, -.001233420727213658, -.004610035314537476, -.004119319153202972, .00025459137646049936, .00492286494534436, .005588805700369816, .001150762425755883, -.004891042781491068, -.0071267634777626675, -.003021979039818941, .00438688631315642, .008631467181982988, .005385139236634672, -.003268406079325266, -.009973661255235284, -.008256256502745316, .0013719935383757782, .010993210336541666, .011651337116264694, .0015082475865128093, -.01148872195209017, -.015609515327517686, -.005671504441670989, .011188303272599716, .02024519058502148, .011637590928971467, -.009667754909210324, -.025878090076785515, -.020500381603699786, .006098908137700642, .033428666116203716, .03513487017573178, .001719739622764723, -.046085580848361105, -.06623078150315037, -.023349941728869696, .08292213207159124, .21069217442624302, .2973829711397418, .2973829711397419, .21069217442624305, .08292213207159124, -.023349941728869693, -.06623078150315037, -.046085580848361105, .0017197396227647225, .03513487017573178, .033428666116203716, .006098908137700641, -.020500381603699783, -.025878090076785508, -.009667754909210326, .011637590928971469, .020245190585021472, .011188303272599716, -.00567150444167099, -.015609515327517682, -.01148872195209017, .001508247586512809, .011651337116264699, .010993210336541666, .0013719935383757782, -.008256256502745314, -.009973661255235283, -.0032684060793252657, .00538513923663467, .008631467181982988, .004386886313156419, -.0030219790398189413, -.0071267634777626675, -.0048910427814910715, .0011507624257558842, .005588805700369813, .00492286494534436, .00025459137646049936, -.004119319153202973, -.004610035314537475, -.0012334207272136583, .002793617164397636, .004067170702246546, .0018375453358851592, -.0016615884301227509, -.0033945413471471847, -.0021281777588728797, .0007494426860893505, .0026761621389245612, .0021716438099647056, -6247794246099253e-20, -.001978299481508373, -.0020347535966250404, -.00041122152287042, .0013489288090360292, .0017804679224891048, .0006964471772153777, -.0008183365045047026, -.00146432823059342, -.0008262743020160207, .0004008193339799063, .0011319450250252222, .0008376185852528037, -9726969824115494e-20, -.0008176720912938694, -.0007673001147209783, -.00010166390716916983, .0005444416935293033, .0006488877825604562, .0002121913694796546, -.00032461046175409424, -.000510486865332593, -.00025410852391986036, .0001615759078178811, .0003735153447767315, .00024792300097682137, -5187432966870808e-20, -.0002524059896175194, -.00021258262011091095, -1253765788919669e-20, .0001550837299357036, .0001639158744747833, 42088177776074685e-21, -8400957697117623e-20, -.00011379935461751733, -4769664553453051e-20, 3755669127044002e-20, 699841935206728e-19, 393243788874656e-19, -11489993827892933e-21, -3645156113737856e-20, -2503383826479402e-20],A = [-5044267067893139e-21, 5738740247594612e-21, 1611195555688156e-20, 10560179594562795e-21, -1242816862904201e-20, -3084430704328611e-20, -18160396924882423e-21, 2303124169528074e-20, 5216612702894834e-20, 2806026886746509e-20, -389608521587068e-19, -8174245278012476e-20, -4037543061985353e-20, 619375276294956e-19, .00012143092661620545, 55083199655424166e-21, -9401891583478883e-20, -.00017326981522755043, -7198069055926206e-20, .0001376274218691789, .00023946132645647525, 9064030545698025e-20, -.00019557611633250834, -.0003223511502826996, -.00011036322783022617, .0002710935667931249, .00042440564349633953, .00013013140955365376, -.00036784896615780913, -.0005481886438481025, -.00014855826094166272, .0004899798946967381, .000696340560985472, .00016383778624615643, -.0006421263408051642, -.0008715631880363658, -.00017369118859371453, .000829476349448821, .0010766146787146871, .00017530890385814463, -.0010578310750603923, -.001314320458073489, -.0001652844648711556, .0013337004262191077, .0015876076783199174, .000139534308084411, -.0016644454627712116, -.001899573527380014, -9319422024995832e-20, .002058491185395933, .0022536018141979036, 20477911370491685e-21, -.0025256449668619525, -.0026535487754524955, 8552498376473957e-20, .0030775744811722015, .0031040297261921, -.00023314744969763122, -.003728529808331677, -.003610856230113392, .000432598472497653, .0044964472481822506, .004181705019767344, -.0006966685466235378, -.005404666489478738, -.00482715710731867, .0010418556659416306, .006484667519607787, .00556235368742558, -.0014902159613265254, -.007780573986407925, -.0064097301786953595, .002072517010858728, .009356870546119134, .0074037416266333166, -.00283386009764953, -.011312323822665827, -.008599512596140524, .003844300507349054, .013806774337071994, .01008985372973804, -.005220460312862638, -.01711716324115331, -.01204196749753927, .007174046245357611, .021768247992024713, .01478690833035584, -.010136389804721707, -.02888735624896028, -.019078400739739057, .015146805312378952, .041410446665863104, .027068163980255515, -.025512027260482153, -.07011218378743589, -.04829678433503421, .06041368701604651, .21199607414538668, .3213532652447261, .3213532652447261, .21199607414538668, .060413687016046526, -.04829678433503422, -.07011218378743589, -.025512027260482153, .027068163980255515, .041410446665863104, .015146805312378952, -.019078400739739057, -.02888735624896028, -.010136389804721703, .01478690833035584, .021768247992024713, .007174046245357611, -.01204196749753927, -.01711716324115331, -.005220460312862639, .010089853729738038, .013806774337071994, .0038443005073490553, -.008599512596140524, -.011312323822665827, -.0028338600976495314, .007403741626633317, .009356870546119134, .002072517010858727, -.006409730178695359, -.007780573986407925, -.001490215961326526, .005562353687425577, .006484667519607787, .0010418556659416256, -.004827157107318673, -.005404666489478739, -.0006966685466235378, .004181705019767345, .004496447248182251, .0004325984724976533, -.003610856230113392, -.003728529808331677, -.0002331474496976315, .0031040297261921003, .003077574481172201, 8552498376473897e-20, -.002653548775452496, -.002525644966861952, 2047791137049164e-20, .002253601814197904, .002058491185395933, -9319422024995909e-20, -.001899573527380014, -.0016644454627712118, .00013953430808441038, .0015876076783199174, .0013337004262191077, -.0001652844648711556, -.0013143204580734896, -.0010578310750603925, .00017530890385814333, .0010766146787146878, .0008294763494488195, -.00017369118859371463, -.00087156318803637, -.0006421263408051633, .00016383778624615698, .0006963405609854716, .0004899798946967381, -.00014855826094166245, -.0005481886438481027, -.00036784896615780924, .00013013140955365368, .00042440564349633964, .00027109356679312505, -.00011036322783022619, -.0003223511502826996, -.00019557611633250842, 9064030545698017e-20, .00023946132645647525, .00013762742186917883, -7198069055926207e-20, -.0001732698152275505, -9401891583478886e-20, 5508319965542416e-20, .00012143092661620549, 6193752762949557e-20, -4037543061985352e-20, -8174245278012477e-20, -38960852158706805e-21, 28060268867465078e-21, 52166127028948336e-21, 2303124169528077e-20, -18160396924882423e-21, -30844307043286126e-21, -12428168629042018e-21, 10560179594562806e-21, 1611195555688157e-20, 5738740247594605e-21, -5044267067893138e-21]
          function E (e, t) {let s
            if (0 === t)s = 1
            else if (t >= e || t <= -e)s = 0
            else {const i = Math.PI * t
              s = e * Math.sin(i) * Math.sin(i / e) / (i * i)}return s}},729: function (e, t, s) {s.d(t, {a: function () {return a},b: function () {return r},c: function () {return K},d: function () {return n},e: function () {return o},f: function () {return f},g: function () {return i},h: function () {return c},i: function () {return d.c},j: function () {return l},k: function () {return h},l: function () {return L},m: function () {return A},n: function () {return M},o: function () {return E},p: function () {return q},q: function () {return _},r: function () {return x},s: function () {return C},t: function () {return z},u: function () {return p},v: function () {return u},w: function () {return d.d},x: function () {return I},y: function () {return U},z: function () {return $},A: function () {return v},B: function () {return b}});var i,n,o,a,r,c,l,h,d = s(216)
          function p (e) {return e && 'object' == typeof e && 'type' in e}function u (e) {return e && 'object' == typeof e && 'postback' === e.type}!function (e) {e.Open = 'open', e.Close = 'close', e.MessageReceived = 'message:received', e.MessageSent = 'message:sent', e.State = 'state'}(i || (i = {})), function (e) {e.Open = 'open', e.Close = 'close', e.Error = 'error', e.Message = 'message', e.MessageReceived = 'message:received', e.MessageSent = 'message:sent', e.State = 'state'}(n || (n = {})), function (e) {e[e.Connecting = 0] = 'Connecting', e[e.Open = 1] = 'Open', e[e.Closing = 2] = 'Closing', e[e.Closed = 3] = 'Closed'}(o || (o = {})), function (e) {e.Call = 'call', e.Location = 'location', e.Postback = 'postback', e.Share = 'share', e.Url = 'url', e.Webview = 'webview'}(a || (a = {})), function (e) {e.Image = 'image', e.Video = 'video', e.Audio = 'audio', e.File = 'file'}(r || (r = {})), function (e) {e.Attachment = 'attachment', e.Card = 'card', e.Location = 'location', e.Postback = 'postback', e.Raw = 'raw', e.Suggest = 'suggest', e.Text = 'text', e.CloseSession = 'closeSession', e.SessionClosed = 'sessionClosed', e.Table = 'table', e.Form = 'form', e.TableForm = 'tableForm'}(c || (c = {})), function (e) {e.Skill = 'bot', e.User = 'user'}(l || (l = {})), function (e) {e.Agent = 'AGENT', e.Bot = 'BOT'}(h || (h = {}));var g,m = s(301)
          !function (e) {e.ConnectionNone = 'ConnectionNone', e.ConnectionExplicitClose = 'ConnectionExplicitClose', e.MessageInvalid = 'MessageInvalid', e.NetworkFailure = 'NetworkFailure', e.NetworkOffline = 'NetworkOffline', e.ProfileInvalid = 'ProfileInvalid', e.TtsNotAvailable = 'TtsNotAvailable', e.TTSNoWebAPI = 'TTSNoWebAPI', e.SuggestionsEmptyRequest = 'SuggestionsEmptyRequest', e.SuggestionsInvalidRequest = 'SuggestionsInvalidRequest', e.SuggestionsTimeout = 'SuggestionsTimeout', e.UploadBadFile = 'UploadBadFile', e.UploadMaxSize = 'UploadMaxSize', e.UploadNetworkFail = 'UploadNetworkFail', e.UploadNotAvailable = 'UploadNotAvailable', e.UploadZeroSize = 'UploadZeroSize', e.LocationNoAPI = 'LocationNoAPI', e.LocationNotAvailable = 'LocationNotAvailable', e.LocationTimeout = 'LocationTimeout', e.LocationInvalid = 'LocationInvalid'}(g || (g = {}));const f = Object.assign(Object.assign(Object.assign({}, g), m.a), d.b)
          function b (e, t, s) {e.setRequestHeader(t, s)}function v (e, t, s) {e.addEventListener(t, s)}function w (e) {return e.lastIndex = 0, e}function x (e) {return Error(e)}function C (e) {return Promise.reject(x(e))}const S = navigator,y = S && S.geolocation
          function _ () {return y ? new Promise(((e, t) => {
              y.getCurrentPosition((t => {
                e(t.coords)}), (e => {
                let s
                switch (e.code) {case e.POSITION_UNAVAILABLE:
                    s = f.LocationNotAvailable
                    break;case e.TIMEOUT:
                    s = f.LocationTimeout
                    break;case e.PERMISSION_DENIED:
                  default:
                    s = f.LocationNoAPI}t(x(s))}), {enableHighAccuracy: !0,timeout: 5e3})})) : C(f.LocationNoAPI)}function T (e) {return 'number' == typeof e}function k (e, t, s) {return e >= t && e <= s}function I (e) {const {latitude:t, longitude:s} = e
            return T(t) && T(s) && k(t, -90, 90) && k(s, -180, 180)}function A (e, t) {const s = function (e) {const t = e.split('/')[0].toLowerCase()
              switch (t) {case r.Audio:
                case r.Image:
                case r.Video:
                  return t;default:
                  return r.File}}(e)
            return {messagePayload: {type: c.Attachment,attachment: {type: s,url: t}}}}function E (e, t) {const s = {messagePayload: {text: e,type: c.Text}}
            return t && (s.sdkMetadata ? s.sdkMetadata.speechId = t : s.sdkMetadata = {speechId: t}), s}function L (e) {let t
            return t = 'label' in e ? e.label : e.text || '', {messagePayload: {text: t,postback: e.postback,type: c.Postback}}}function M (e) {return {messagePayload: e}}const P = '; ',D = '',O = /<[^>]+>/g,B = /&#(\d+);/g,R = /&#[xX]([\da-fA-F]+);/g
          function z (e, t) {const s = e.messagePayload
            let i = D
            switch (s.type) {case c.Attachment:
                i = function (e, t) {return`${t[`${e.type}_${e.attachment.type}`]}`}(s, t)
                break;case c.Card:
                i = function (e, t) {const s = e.cards
                  let i = D,n = D
                  if (s && s.length) {const e = t.card,o = e ? e.indexOf('{0}') >= 0 ? e : `${e} {0}` : D,a = s.length > 1
                    i = s.filter((e => e.title)).map(((e, t) => {
                      const s = `${a?`${o.replace("{0}",`${t+1}`)}: `:D}`,i = e.description,r = i ? P + i : D
                      if (e.actions) {const t = function (e) {return e && e.length && e.filter((e => e && e.label)).map((e => e.label)).join(P) || D}(e.actions)
                        n = t ? P + t : D}return`${s}${e.title}${r}${n}`})).join(P)}return i}(s, t)
                break;case c.Location:
                i = function (e) {const t = e.location
                  return`${t.title?`${t.title}; `:D}${t.latitude},${t.longitude}`}(s)
                break;case c.Text:
                i = s.text
                break;case c.Table:
                i = function (e, t) {const s = e.paginationInfo,i = s && s.status
                  return (i ? i + P : D) + e.rows.filter((e => e && e.fields && e.fields.length)).map(((e, s) => N(e, s, t))).join(P)}(s, t)
                break;case c.Form:
                i = function (e, t) {const s = e.paginationInfo,i = s && s.status
                  return (i ? i + P : D) + e.forms.filter((e => e && e.fields && e.fields.length)).map(((e, s) => N(e, s, t))).join(P)}(s, t)
                break;case c.TableForm:
                i = function (e, t) {const s = e.paginationInfo,i = s && s.status
                  return (i ? i + P : D) + e.rows.filter((e => e && e.fields && e.fields.length)).map(((s, i) => N(s, i, t) + P + F(e.forms[i].fields, t))).join(P)}(s, t)}return n = function (e, t) {const s = e.headerText || D,i = e.footerText || D
                return s + (s && t ? P : D) + t + V(e.actions) + (i ? `; ${i}` : D) + V(e.globalActions)}(s, i), n && n.length ? n.replace(w(B), ((e, t) => String.fromCharCode(t))).replace(w(R), ((e, t) => {
                const s = Number.parseInt(`0x${t}`, 16)
                return String.fromCharCode(s)})).replace(w(O), D) : D;var n}function V (e) {let t = D
            return e && e.forEach((e => {
                e.label && (t = `${t}; ${e.label}`)})), t}function N (e, t, s) {return`${(s.itemIterator||"").replace("{0}",`${t+1}`)}: ${F(e.fields,s)}`}function F (e, t) {return e && e.length ? e.filter((e => e && e.value)).map((e => `${e.label}: ${"link"===e.displayType?(t.linkField||"").replace("{0}",e.label):e.value}`)).join(P) : D}function U (e) {const t = !1
            if ((s = e) && 'object' == typeof s && 'messagePayload' in s) {const s = e.messagePayload
              if (p(s)) {if (s.actions && !H(s.actions))return t;if (s.globalActions && !H(s.globalActions))return t;switch (s.type) {case c.Attachment:
                    return function (e) {const t = e.attachment
                      return !!(t && t.type && t.url)}(s);case c.Card:
                    return function (e) {let t = !1
                      if (e.layout && e.cards.length) {t = !0
                        for (const t of e.cards) {
                          if (!t.title)return !1;if (t.actions && !H(t.actions))return !1 }
                      }return t}(s);case c.CloseSession:
                  case c.SessionClosed:
                    return !0;case c.Location:
                    return function (e) {const t = e.location
                      return !!(t && t.latitude && t.longitude)}(s);case c.Postback:
                    return function (e) {return !!e.postback}(s);case c.Text:
                    return function (e) {return !!e.text}(s);case c.Table:
                    return j(s);case c.Form:
                    return W(s);case c.TableForm:
                    return function (e) {return j(e) && W(e)}(s)}}}var s
            return t}function H (e) {
            for (const t of e) if (!t.type || !t.label || 'string' != typeof t.label)return !1; return !0}function $ (e) {return e && 'profile' in e && 'object' == typeof e.profile && null !== e.profile}function j (e) {const t = e.headings,s = e.rows
            return t && t.length > 0 && s && s.length > 0 && t.every((e => G(e))) && s.every((e => Y(e)))}function W (e) {const t = e.forms,s = e.formColumns
            return t && t.length > 0 && t.every((e => Y(e))) && 'number' == typeof s && s > 0}function G (e) {const t = e.label
            return void 0 !== t && t.length > 0}function Y (e) {const t = e.fields
            return t && t.length > 0 && t.every((e => function (e) {const t = e.displayType
                return t && ('link' === t || 'text' === t) && G(e)}(e)))}function q () {let e = {}
            return {bind: (t, s) => {
                t && s && s instanceof Function && (Object.prototype.hasOwnProperty.call(e, t) ? e[t].push(s) : e[t] = [s])},trigger: (t, ...s) => {
                if (Object.prototype.hasOwnProperty.call(e, t)) {const i = null != s ? s : []
                  e[t].forEach((e => {
                    try {e.call(null, ...i)} catch(e) {console.error(`${t} listener error`, e) }}))}},unbind: (t, s) => {
              t ? s || !Object.prototype.hasOwnProperty.call(e, t) ? e[t] = e[t].filter((e => e !== s)) : e[t].splice(0, e[t].length) : e = {}}}}
          class K {
            constructor (e) {this.dispatcher = e, this.state = o.Closed}
            getState () {return this.state}
            isOpen () {return this.state === o.Open}
            isClosed () {return this.state === o.Closed}
            on (e, t) {this.dispatcher.bind(e, t)}
            off (e, t) {this.dispatcher.unbind(e, t)}
            setState (e) {this.state = e, this.dispatcher.trigger(n.State, e)}
          }
        },930: function (e, t, s) {s.r(t), s.d(t, {ActionType: function () {return x.a},AttachmentType: function () {return x.b},ConnectionState: function () {return x.e},CoreError: function () {return x.f},CoreEvent: function () {return x.g},FILE_TYPES: function () {return O},MAX_MB: function () {return M},MessageType: function () {return x.h},RecognitionLocale: function () {return w.c},SenderType: function () {return x.j},SkillMessageSource: function () {return x.k},WebCore: function () {return B},buildPostbackMessage: function () {return x.l},buildUserMessage: function () {return x.n},buildUserTextMessage: function () {return x.o},isMessagePayload: function () {return x.u},isPostbackPayload: function () {return x.v},isValidLocale: function () {return w.d},isValidMessage: function () {return x.y}});var i = s(301)
          let n = 1,o = 1,a = 1
          const r = window,c = r.addEventListener,l = r.speechSynthesis,h = r.SpeechSynthesisUtterance,d = r.navigator,p = clearTimeout
          class u {
            constructor () {if (!r || !l || !h)throw Error('TTSNoWebAPI');f().then((e => {
                this._voice = e})), c('beforeunload', (e => {
                l.cancel(), p(this._pauser), delete e.returnValue})), c('click', (() => {
                l && (l.cancel(), l.resume(), l.speak(new h(' ')))}), {once: !0})}
            static getInstance () {return this._service || (this._service = new u), this._service}
            speak (e) {if (this._voice) {const t = new h(e)
                t.voice = this._voice, t.pitch = n, t.rate = o, t.volume = a, l.paused && l.resume(), l.speak(t), this._voice.localService || (p(this._pauser), b((e => this._pauser = e)))}}
            cancel () {l.speaking && (l.cancel(), p(this._pauser))}
            getVoices () {return g()}
            setVoice (e) {return function (e) {const t = e.map((e => Object.assign({lang: '',name: ''}, e)))
                return g().then((e => {
                  for (const s of t)
                    for (const t of e) if (v(s.lang, t.lang) && v(s.name, t.name))return t
                  for (const s of t)
                    for (const t of e) if (v(s.lang, t.lang))return t
                  for (const s of t)
                    for (const t of e) if (t.lang.indexOf(s.lang) >= 0)return t; return f()}))}(e).then((e => {
                this._voice = e, n = e.pitch || 1, o = e.rate || 1, a = e.volume || 1}))}
            getVoice () {return this._voice}
          }
          function g () {return new Promise((e => {
              m(e), l.addEventListener('voiceschanged', (() => {
                m(e)}))}))}function m (e) {const t = l.getVoices()
            t.length && e(function (e) {return Array.isArray(e) ? e : e._list}(t))}function f () {return g().then((e => {
              if (d && d.language) {const t = e.filter((e => e.lang === d.language))[0]
                if (t)return t}const t = e.filter((e => e.default))[0]
              return t || e[0]}))}function b (e) {const t = r.setTimeout((() => {
              l.speaking && (l.pause(), l.resume(), b(e))}), 1e4)
            e(t)}function v (e, t) {return e.toLowerCase() === t.toLowerCase()}var w = s(216),x = s(729)
          const C = {state: {type: 'ping'}}
          class S extends x.c {
            constructor (e) {super(e.dispatcher), this.url = e.url, this.authService = e.authService}
            open () {return this.isOpen() ? Promise.resolve() : navigator.onLine ? this.connect() : (0, x.s)(x.f.NetworkOffline)}
            close () {return this.isClosed() ? Promise.resolve() : this.disconnect()}
            send (e) {return new Promise(((t, s) => {
                if (this.isOpen()) {const i = new XMLHttpRequest
                  i.open('POST', this.url), (0, x.B)(i, 'Content-Type', 'application/json'), i.onload = () => {
                    i.status >= 200 && i.status < 300 ? t(e) : s(i.response)}, i.onerror = () => {
                    s((0, x.r)(x.f.NetworkFailure))}, this.sendRequest(i, JSON.stringify(e)).catch(s)}else s((0, x.r)(x.f.ConnectionNone))}))}
            updateConnectionUrl (e) {this.url = (0, i.h)(e.URI, {channelId: e.channelId,userId: e.userId}, e.isTLS)}
            connect () {return this.openPromise || (this.openPromise = new i.c, this.setState(x.e.Connecting), this.openConnection().then((() => {
                  this.onOpen(), this.poll()})).catch((e => {
                  this.openPromise && (this.openPromise.reject(e), this.openPromise = null), this.onClose()}))), this.openPromise.promise}
            disconnect () {return this.closePromise || (this.xhr.abort(), this.closePromise = new i.c, this.setState(x.e.Closing), this.onClose()), this.closePromise.promise}
            openConnection () {return new Promise(((e, t) => {
                const s = new XMLHttpRequest
                s.open('POST', this.url), (0, x.B)(s, 'Content-Type', 'application/json'), s.onload = () => {
                  s.status >= 200 && s.status < 300 ? e() : t(s.response)}, s.onerror = () => {
                  t((0, x.r)(x.f.NetworkFailure))}, this.sendRequest(s, JSON.stringify(C)).catch((e => {
                  t(e)}))}))}
            poll () {let e = 0
              this.isOpen() && (this.xhr = new XMLHttpRequest, this.xhr.open('GET', this.url), this.xhr.onload = () => {
                e = 0, this.xhr.status && 200 === this.xhr.status && this.onMessages(this.xhr.responseText), this.poll()}, this.xhr.onerror = () => {
                5 === e ? this.close() : (e++, this.poll())}, this.sendRequest(this.xhr))}
            sendRequest (e, t) {return this.authService ? new Promise(((s, i) => {
                var n
                null === (n = this.authService) || void 0 === n || n.get().then((i => {
                  (0, x.B)(e, 'Authorization', `Bearer ${i.token}`), e.send(t), s()})).catch((e => {
                  i(e)}))})) : (e.send(t), Promise.resolve())}
            onMessages (e) {try {JSON.parse(e).forEach((e => {
                  this.onMessage(JSON.parse(e))}))} catch(e) {this.onError(e) }}
            onOpen () {this.openPromise && (this.openPromise.resolve(), this.openPromise = null), this.closePromise && (this.closePromise.reject(), this.closePromise = null), this.setState(x.e.Open), this.dispatcher.trigger(x.d.Open)}
            onClose () {this.closePromise && (this.closePromise.resolve(), this.closePromise = null), this.openPromise = null, this.setState(x.e.Closed), this.dispatcher.trigger(x.d.Close)}
            onMessage (e) {this.dispatcher.trigger(x.d.Message, e), this.dispatcher.trigger(x.d.MessageReceived, e)}
            onError (e) {this.dispatcher.trigger(x.d.Error, e)}
          }
          const y = Promise,_ = 3e6,T = window
          class k extends x.c {
            constructor (e) {super(e.dispatcher), this.isExplicitClose = !1, this.isHeartBeatAlive = !1, this.isTokenValid = !1, this.retryAttempt = 0, this.reconnectAttempted = !1, this.ws = null, this.url = e.url, this.authService = e.authService, this.retryInterval = e.retryInterval, this.retryMaxAttempts = e.retryMaxAttempts}
            open () {return this.isOpen() ? y.resolve() : navigator.onLine ? this.connect() : (0, x.s)(x.f.NetworkOffline)}
            close () {return this.isExplicitClose = !0, clearTimeout(this.retryMonitor), this.isClosed() ? y.resolve() : this.disconnect()}
            send (e) {return new y(((t, s) => {
                if (this.ws && this.isOpen()) {this.isTokenValid = !0;try {this.ws.send(JSON.stringify(e)), t(e), (i = e).state && i.state.type && 'ping' === i.state.type || (this.dispatcher.trigger(x.d.Message, e), this.dispatcher.trigger(x.d.MessageSent, e))} catch(e) {s((0, x.r)(x.f.NetworkFailure)) }}else s((0, x.r)(x.f.ConnectionNone));var i}))}
            updateConnectionUrl (e) {this.url = (0, i.i)(e.URI, {channelId: e.channelId,userId: e.userId}, e.isTLS, e.channel)}
            connect () {return this.openPromise || (this.openPromise = new i.c, this.setState(x.e.Connecting), this.openConnection()), this.openPromise.promise}
            disconnect () {var e
              return this.closePromise || (null === (e = this.ws) || void 0 === e || e.close(), this.closePromise = new i.c, this.setState(x.e.Closing)), this.closePromise.promise}
            openConnection () {try {this.ws = new WebSocket(this.url), this.ws.onopen = () => {
                  this.setState(x.e.Open), this.reconnectAttempted = !1, this.authService ? this.authenticateConnection() : this.onOpen()}, this.ws.onclose = e => {
                  this.stopMonitors(), this.isExplicitClose ? (this.setState(x.e.Closed), this.rejectAndCloseConnection(x.f.ConnectionExplicitClose, e)) : this.authService && !this.isTokenValid && 1006 !== e.code ? (this.setState(x.e.Closed), this.rejectAndCloseConnection(x.f.AuthExpiredToken, e)) : this.reconnectAttempted || this.retryConnection(e)}, this.ws.onmessage = this.onMessage.bind(this), this.ws.onerror = () => {
                  this.retryConnection(), this.reconnectAttempted = !0, this.onError.bind(this)}} catch(e) {this.retryConnection() }}
            retryConnection (e) {this.setState(x.e.Connecting), this.retryAttempt < this.retryMaxAttempts ? (this.retryAttempt++, this.retryMonitor = T.setTimeout(this.openConnection.bind(this), this.retryInterval)) : (this.setState(x.e.Closed), this.rejectAndCloseConnection(x.f.NetworkFailure, e))}
            rejectAndCloseConnection (e, t) {this.openPromise && this.openPromise.reject((0, x.r)(e)), this.onClose(t)}
            authenticateConnection () {var e
              this.isTokenValid = !1, null === (e = this.authService) || void 0 === e || e.get().then((e => {
                this.send(function (e) {return {state: {token: e,tokenType: 'jwt',type: 'auth'}}}(e.token)).then((() => {
                  setTimeout((() => this.isTokenValid = !0), 1e4), this.onOpen()}))})).catch((e => {
                var t
                null === (t = this.openPromise) || void 0 === t || t.reject(e), this.close()}))}
            onOpen () {var e
              this.stopMonitors(), clearTimeout(this.retryMonitor), this.heartBeatMonitor = this.initHeartBeat(), this.refreshMonitor = (e = this, T.setTimeout((() => {
                I(e)}), _)), this.retryAttempt = 0, this.isExplicitClose = !1, this.isTokenValid = !1, this.openPromise && (this.openPromise.resolve(), this.openPromise = null), this.closePromise && (this.closePromise.reject(), this.closePromise = null), this.dispatcher.trigger(x.d.Open)}
            onClose (e) {this.retryAttempt = 0, this.isExplicitClose = !1, this.isTokenValid = !1, this.closePromise && (this.closePromise.resolve(), this.closePromise = null), this.openPromise = null, this.dispatcher.trigger(x.d.Close, e)}
            onMessage (e) {try {const t = JSON.parse(e.data)
                !function (e) {return e.state && e.state.type && 'pong' === e.state.type}(t) ? (this.dispatcher.trigger(x.d.Message, t), this.dispatcher.trigger(x.d.MessageReceived, t)) : this.isHeartBeatAlive = !0} catch(e) {this.onError(e) }}
            onError (e) {this.dispatcher.trigger(x.d.Error, e)}
            initHeartBeat () {return T.setInterval((() => {
                this.send(C).then((() => {
                  this.isHeartBeatAlive = !1, this.pongMonitor = T.setTimeout((() => {
                    this.isOpen() && !this.isHeartBeatAlive && I(this)}), 1e4)}))}), 3e4)}
            stopMonitors () {clearTimeout(this.refreshMonitor), clearInterval(this.heartBeatMonitor), clearTimeout(this.pongMonitor)}
          }
          function I (e) {e.close().then((() => e.open()))}
          class A {
            constructor (e) {this.options = e, e.isLongPoll && (this.options.retryInterval = 2e3, this.options.retryMaxAttempts = 5), this.dispatcher = (0, x.p)(), this.wsConnection = new k({authService: e.authService,url: (0, i.i)(e.baseURL, e.searchParams, e.isTLS, e.channel),retryInterval: e.retryInterval,retryMaxAttempts: e.retryMaxAttempts,dispatcher: this.dispatcher}), this.currentConnection = this.wsConnection}
            open () {return this.options.isLongPoll ? new Promise(((e, t) => {
                this.wsConnection.open().then((() => {
                  this.useWS(e)})).catch((() => {
                  this.useLongPoll(e, t)}))})) : this.currentConnection.open()}
            close () {return clearTimeout(this.upgradeToWebSocketMonitor), this.currentConnection.close()}
            send (e) {return this.currentConnection.send(e)}
            isOpen () {return this.currentConnection.isOpen()}
            isClosed () {return this.currentConnection.isClosed()}
            getState () {return this.currentConnection.getState()}
            updateConnectionUrl (e) {var t
              this.wsConnection.updateConnectionUrl(e), this.options = Object.assign(Object.assign({}, this.options), {baseURL: e.URI,searchParams: {channelId: e.channelId,userId: e.userId},isTLS: e.isTLS,channel: e.channel}), null === (t = this.longPollConnection) || void 0 === t || t.updateConnectionUrl(e)}
            on (e, t) {this.dispatcher.bind(e, t)}
            off (e, t) {this.dispatcher.unbind(e, t)}
            useWS (e) {var t
              this.currentConnection = this.wsConnection, clearTimeout(this.upgradeToWebSocketMonitor), (null === (t = this.longPollConnection) || void 0 === t ? void 0 : t.isOpen()) && this.longPollConnection.close(), e()}
            useLongPoll (e, t) {this.currentConnection = this.getLongPollConnection(), this.currentConnection.open().then((() => {
                this.upgradeToWebSocketMonitor = this.initUpgradeToWebSocketTimer(), e()})).catch((e => {
                t(e)}))}
            getLongPollConnection () {return this.longPollConnection || (this.longPollConnection = new S({url: (0, i.h)(this.options.baseURL, this.options.searchParams, this.options.isTLS),authService: this.options.authService,dispatcher: this.dispatcher})), this.longPollConnection}
            initUpgradeToWebSocketTimer () {return window.setTimeout(this.open.bind(this), 3e5)}
          }
          const E = {isLongPoll: !1,isTLS: !0}
          class L {
            constructor (e) {this.areNewConnectionParamsPassed = (e, t, s) => {
                let i = !1
                return (e && e !== this.config.URI || t && t !== this.config.channelId || s && s !== this.config.userId) && (i = !0), i}, this.updateConnectionParams = (e, t, s) => new Promise(((i, n) => {
                e && 'string' == typeof e && e.length && (this.config.URI = e), this.authService ? this.authService.get().then((e => {
                  this.config.channelId = e.getClaim('channelId'), this.config.userId = e.getClaim('userId'), this.connection.updateConnectionUrl({URI: this.config.URI,channelId: this.config.channelId,userId: this.config.userId,isTLS: this.config.isTLS,channel: this.config.channel}), i()})).catch((e => n(e))) : ('string' == typeof t && t.length && (this.config.channelId = t), 'string' == typeof s && s.length && (this.config.userId = s), this.connection.updateConnectionUrl({URI: this.config.URI,channelId: this.config.channelId,userId: this.config.userId,isTLS: this.config.isTLS,channel: this.config.channel}), i())})), this.config = Object.assign(Object.assign({}, E), e), this.config.tokenGenerator && (this.authService = i.b.getInstance()), this.connection = new A({baseURL: this.config.URI,isLongPoll: this.config.isLongPoll,isTLS: this.config.isTLS,channel: this.config.channel,retryInterval: void 0 !== this.config.retryInterval && this.config.retryInterval >= 0 ? 1e3 * this.config.retryInterval : 5e3,retryMaxAttempts: void 0 !== this.config.retryMaxAttempts && this.config.retryMaxAttempts >= 0 ? this.config.retryMaxAttempts : 5,searchParams: {channelId: this.config.channelId,userId: this.config.userId},authService: this.authService}), window.addEventListener('online', (() => this.open())), window.addEventListener('offline', (() => this.close()))}
            open (e) {const {URI:t, userId:s, channelId:i} = e || {}
              if (this.isOpen()) {if (this.areNewConnectionParamsPassed(t, i, s)) {const e = t && this.config.URI !== t
                  return !this.authService || e ? this.close().then((() => this.updateConnectionParams(t, i, s).then((() => this.connection.open())))) : Promise.resolve()}return Promise.resolve()}return this.updateConnectionParams(t, i, s).then((() => this.connection.open()))}
            close () {return this.connection.close()}
            isOpen () {return this.connection.isOpen()}
            send (e, t, s) {let i
              return i = 'string' == typeof e ? (0, x.o)(e, t) : (0, x.v)(e) ? (0, x.l)(e) : (0, x.u)(e) ? (0, x.n)(e) : e, (0, x.y)(i) ? ((null == s ? void 0 : s.sdkMetadata) && (i = this.updateMetadata(i, s.sdkMetadata)), i.userId = this.config.userId, this.connection.send(i)) : (0, x.s)(x.f.MessageInvalid)}
            updateUser (e, t) {let s = e
              return (null == t ? void 0 : t.sdkMetadata) && (s = this.updateMetadata(e, t.sdkMetadata)), this.connection.send(s)}
            sendDeviceToken (e) {const t = {state: {type: 'token',deviceToken: e}}
              return this.connection.send(t)}
            getSuggestions (e) {var t
              const s = {messagePayload: {query: e,threshold: 30,type: x.h.Suggest}}
              return this.suggestionPromise = new i.c, this.connection.send(s), setTimeout((() => {
                  var e
                  null === (e = this.suggestionPromise) || void 0 === e || e.reject((0, x.r)(x.f.SuggestionsTimeout))}), 1e4), null === (t = this.suggestionPromise) || void 0 === t ? void 0 : t.promise}
            on (e, t) {switch (e) {case x.g.MessageReceived:
                  this.connection.on(x.d.MessageReceived, (e => {
                    var s
                    e.suggestions && this.suggestionPromise ? null === (s = this.suggestionPromise) || void 0 === s || s.resolve(e.suggestions) : t(e)}))
                  break;case x.g.MessageSent:
                  this.connection.on(x.d.MessageSent, t)
                  break;case x.g.State:
                  this.connection.on(x.d.State, t)
                  break;case x.g.Open:
                  this.connection.on(x.d.Open, t)
                  break;case x.g.Close:
                  this.connection.on(x.d.Close, t)}}
            off (e, t) {this.connection.off(e, t)}
            updateMetadata (e, t) {return t && (e.sdkMetadata = Object.assign(Object.assign({}, e.sdkMetadata), t)), e}
          }
          const M = 25,P = 1024 * M * 1024
          class D {
            static getInstance () {return this.service || (this.service = new D), this.service}
            setParams (e) {this.params = e, this.URL = function (e, t, s) {const n = `http${s?"s":""}://`
                return (0, i.e)(n, e, t, '/chat/v1/attachments')}(e.URI, {channelId: e.channelId,userId: e.userId}, e.isTLS)}
            upload (e, t) {return new Promise(((s, n) => {
                const o = e.size
                if (0 === o)return void n(Error(x.f.UploadZeroSize));if (o > P)return void n(Error(x.f.UploadMaxSize));const a = new XMLHttpRequest,r = () => n(Error(x.f.UploadNetworkFail));(0, x.A)(a, 'readystatechange', (() => {
                  if (4 === a.readyState)switch (a.status) {case 200: {
                        const e = JSON.parse(a.responseText)
                        s(e)
                        break
                      }
                      case 413:
                        n(Error(x.f.UploadMaxSize))
                        break;case 415:
                        n(Error(x.f.UploadBadFile))
                        break;default:
                        r()}})), (0, x.A)(a, 'abort', r), (0, x.A)(a, 'error', r), (0, x.A)(a, 'timeout', r), this.params.tokenGenerator ? i.b.getInstance().get().then((s => this.send(a, {file: e,options: t,token: s.token}))).catch((e => n(e))) : this.send(a, {file: e,options: t})}))}
            send (e, {file:t, options:s, token:i}) {const n = new FormData
              n.append('attachment', t, encodeURI(t.name)), e.open('POST', this.URL), (0, x.B)(e, 'x-oda-meta-file-size', t.size.toString()), i && ((0, x.B)(e, 'Authorization', `Bearer ${i}`), this.params.enableAttachmentSecurity && ((0, x.B)(e, 'x-oda-meta-file-isProtected', 'True'), (0, x.B)(e, 'x-oda-meta-file-authType', 'ChannelClientAuth'))), e.send(n), s && s.onInitUpload && s.onInitUpload(e)}
          }
          const O = {AUDIO: '.aac, .amr, .m4a, .mp3, .mp4a, .mpga, .oga, .ogg, .wav, audio/*',FILE: '.7z, .csv, .doc, .docx, .eml, .ics, .key, .log, .msg, .neon, .numbers, .odt, .pages, .pdf, .pps, .ppsx, .ppt, .pptx, .rtf, .txt, .vcf, .xls, .xlsx, .xml, .yml, .yaml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',IMAGE: '.gif, .jfif, .jpeg, .jpg, .png, .svg, .tif, .tiff, .webp, image/*',VIDEO: '.3g2, .3gp, .avi, .m4v, .mov, .mp4, .mpeg, .mpg, .ogv, .qt, .webm, .wmv, video/*',ALL: ''}
          O.ALL = `${O.AUDIO},${O.FILE},${O.IMAGE},${O.VIDEO}`
          class B {
            constructor (e) {this.recognizedText = null, this.initServices(e), this.chatService = new L(e), this.chatService.on(x.g.Open, (() => {
                this.uploadService && this.uploadService.setParams(e), this.recognitionService && this.recognitionService.setConfig(e)}))}
            connect (e) {return this.chatService.open(e)}
            disconnect () {const e = this.chatService.close()
              return e.then(this.onChatServiceClose.bind(this)), e}
            isConnected () {return this.chatService.isOpen()}
            sendMessage (e, t) {if (!e)return (0, x.s)(x.f.MessageInvalid);let s = '',i = ''
              return 'string' == typeof e ? i = e : (0, x.u)(e) && (i = e.text), this.recognizedText && this.recognizedText.text === i && (s = this.recognizedText.requestId), this.recognizedText = null, this.chatService.send(e, s, t)}
            updateUser (e, t) {return (0, x.z)(e) ? this.chatService.updateUser(e, t) : (0, x.s)(x.f.ProfileInvalid)}
            sendDeviceToken (e) {return this.chatService.sendDeviceToken(e)}
            uploadAttachment (e, t) {return this.isConnected() ? this.uploadService ? this.uploadService.upload(e, t).then((e => (0, x.m)(e.type, e.url))) : (0, x.s)(x.f.UploadNotAvailable) : (0, x.s)(x.f.ConnectionNone)}
            sendAttachment (e, t) {return this.uploadAttachment(e, t).then((e => this.chatService.send(e, '', {sdkMetadata: null == t ? void 0 : t.sdkMetadata})))}
            sendLocation (e) {return this.isConnected() ? e ? (0, x.x)(e) ? this.chatService.send({messagePayload: {type: x.h.Location,location: e}}) : (0, x.s)(x.f.LocationInvalid) : (0, x.q)().then((e => this.chatService.send({messagePayload: {type: x.h.Location,location: {latitude: e.latitude,longitude: e.longitude}}}))) : (0, x.s)(x.f.ConnectionNone)}
            getSuggestions (e) {return e ? 'string' != typeof e ? (0, x.s)(x.f.SuggestionsInvalidRequest) : this.chatService.getSuggestions(e) : (0, x.s)(x.f.SuggestionsEmptyRequest)}
            destroy () {this.disconnect(); for (const e in this)this[e] && delete this[e]}
            setTTSService (e) {this.ttsService = e}
            getTTSService () {return this.ttsService || u.getInstance()}
            getTTSVoices () {return this.ttsService ? this.ttsService.getVoices() : (0, x.s)(x.f.TtsNotAvailable)}
            setTTSVoice (e) {return this.ttsService ? this.ttsService.setVoice(e) : (0, x.s)(x.f.TtsNotAvailable)}
            getTTSVoice () {if (this.ttsService)return this.ttsService.getVoice();throw(0, x.r)(x.f.TtsNotAvailable)}
            speakTTS (e, t) {if (this.ttsService) {let s
                if ('string' == typeof e)s = e
                else {if (!(0, x.y)(e))return;s = (0, x.t)(e, t)}this.ttsService.speak(s)}}
            cancelTTS () {this.ttsService && this.ttsService.cancel()}
            startRecognition (e) {return this.recognitionService ? this.isConnected() ? this.recognitionService.startRecognition(Object.assign(Object.assign({}, e), {onRecognitionText: t => {
                'final' === t.type && (this.recognizedText = t), e.onRecognitionText(t)}})) : (0, x.s)(x.f.ConnectionNone) : (0, x.s)(x.f.RecognitionNotAvailable)}
            stopRecognition () {return this.recognitionService ? this.recognitionService.stopRecognition() : (0, x.s)(x.f.RecognitionNotAvailable)}
            setRecognitionLocale (e) {if (e && 'string' == typeof e && this.recognitionService) {const t = e.toLowerCase()
                this.recognitionService.setLocale(t)}}
            on (e, t) {this.chatService.on(e, t)}
            getAuthToken () {var e
              return null === (e = this.authService) || void 0 === e ? void 0 : e.get()}
            onChatServiceClose () {console.log('The chat service is closed.')}
            initServices (e) {e.URI = e.URI.replace(/^https?:\/\//gi, (e => (console.warn(`Please remove "${e}" from URI.`), ''))), this.initAttachmentService(e), this.initAuthService(e), this.initTTSService(e), this.recognitionService = w.a.getInstance()}
            initAttachmentService (e) {e.enableAttachment && (this.uploadService = D.getInstance())}
            initAuthService (e) {e.tokenGenerator && (this.authService = i.b.getInstance(), this.authService.setFetch(e.tokenGenerator))}
            initTTSService (e) {if (e.isTTS) {if (e.TTSService)return void (this.ttsService = e.TTSService);try {this.ttsService = u.getInstance()} catch(e) {}}}
          }
        },105: function (e, t, s) {var i
          s.r(t), s.d(t, {ChatEvent: function () {return i},ConnectionState: function () {return E.e},DOMUtil: function () {return De},Logger: function () {return o},RecognitionLocale: function () {return E.i},SDK_VERSION: function () {return $},ShareCategory: function () {return Ne},StorageType: function () {return ze},WidgetComponent: function () {return qt},WidgetTheme: function () {return Ve},configureLocale: function () {return T},debounce: function () {return k},deepFreeze: function () {return l},generateEventDispatcher: function () {return a},getValues: function () {return h},isAnyVoiceAvailable: function () {return d},isFunction: function () {return n.j},setObjectReadOnly: function () {return x},syncTTSLocaleIfUnavailable: function () {return S},updateCSSVar: function () {return I}}), function (e) {e.CHAT_LANG = 'chatlanguagechange', e.CLICK_AUDIO_RESPONSE_TOGGLE = 'click:audiotoggle', e.CLICK_ERASE = 'click:erase', e.CLICK_VOICE_TOGGLE = 'click:voicetoggle', e.DESTROY = 'destroy', e.CHAT_END = 'chatend', e.MESSAGE = 'message', e.MESSAGE_RECEIVED = 'message:received', e.MESSAGE_SENT = 'message:sent', e.NETWORK = 'networkstatuschange', e.READY = 'ready', e.TYPING = 'typing', e.UNREAD = 'unreadCount', e.WIDGET_CLOSED = 'widget:closed', e.WIDGET_OPENED = 'widget:opened'}(i || (i = {}));var n = s(301)
          class o {
            constructor (e) {this.module = e}
            debug (...e) {this._log(o.LOG_LEVEL.DEBUG, e)}
            error (...e) {this._log(o.LOG_LEVEL.ERROR, e)}
            info (...e) {this._log(o.LOG_LEVEL.INFO, e)}
            warn (...e) {this._log(o.LOG_LEVEL.WARN, e)}
            _log (e, t) {if (o.logLevel >= e) {let s
                switch (t.unshift(`[${o.appName}.${o.appVersion}.${this.module}]`), o.logLevel) {case o.LOG_LEVEL.ERROR:
                    s = console.error
                    break;case o.LOG_LEVEL.WARN:
                    s = console.warn
                    break;case o.LOG_LEVEL.INFO:
                    s = console.info
                    break;case o.LOG_LEVEL.DEBUG:
                    s = console.debug}o.historyEnabled && (o.history.push(Object.assign(Object.assign({}, t), {level: e})), o._historySize <= o.history.length && o.history.shift()), s.apply(console, t)}}
          }
          function a () {let e = {}
            const t = new o('event'),s = t => !!e[t]
            return {bind: (t, i) => {
                t && i && (0, n.j)(i) && (s(t) ? e[t].push(i) : e[t] = [i])},trigger: (i, ...n) => {
                s(i) && (n = null != n ? n : [], e[i].forEach((e => {
                  try {e.call(null, ...n)} catch(e) {t.error(`${i} listener threw error`, e) }})))},unbind: (t, i) => {
              t ? i ? e[t] = e[t].filter((e => e !== i)) : s(t) && e[t].splice(0, e[t].length) : e = {}}}}o.LOG_LEVEL = {DEBUG: 4,ERROR: 1,INFO: 3,NONE: 0,WARN: 2}, o.logLevel = o.LOG_LEVEL.ERROR, o.history = [], o.historyEnabled = !1, o._historySize = 100;const r = () => navigator && navigator.geolocation,c = e => {
              let t
              try {t = window[e];const s = '__storage_test__'
                return t.setItem(s, s), t.removeItem(s), !0} catch(e) {return e instanceof DOMException && (22 === e.code || 1014 === e.code || 'QuotaExceededError' === e.name || 'NS_ERROR_DOM_QUOTA_REACHED' === e.name) && t && 0 !== t.length }}
          function l (e) {const t = Object.keys(e)
            for (const s of t) {
              const t = e[s]
              t && 'object' == typeof t && l(t) }
            return Object.freeze(e)}function h (e) {const t = []
            if ('object' == typeof e && null !== e)
              for (const s of Object.keys(e)) t.push(e[s]); return t}function d (e, t) {if (!t)return Promise.resolve(!1);if (Array.isArray(t) || (t = [t]), !t.length)return Promise.resolve(!1);const s = t.map((e => {
              var t
              return null === (t = e.lang) || void 0 === t ? void 0 : t.toLowerCase()}))
            return e.getVoices().then((e => {
              let t = !1
              const i = e.map((e => e.lang.toLowerCase()))
              for (const e of s) if (i.indexOf(e) >= 0) {t = !0;break} return t}))}const p = /(?:youtube\.com\/watch\?v=|youtu.be\/)([^#&?\s]*)/gim
          function u (e) {let t
            return e.replace(m(p), ((e, s) => (s && s.length && (t = s), e))), t}const g = /(?:https?:\/\/)?videohub\.oracle\.com\/media\/\S+\/([\w]+)/gim
          function m (e) {return e.lastIndex = 0, e}const f = [{match: /<([a-z])/gi,replace: (e, t) => `&#x3c;${t}`}, {match: /<\/([a-z])/gi,replace: (e, t) => `&#x3c;&#47;${t}`}]
          function b (e) {return f.forEach((t => {
                e = e.replace(m(t.match), t.replace)})), e}function v (e, t) { for (let s = 0;s < e.childElementCount;s++) {const i = e.children[s]
              if ('a' === i.tagName.toLowerCase()) {const e = i
                e.rel = 'noreferrer noopener', t.onclick && (e.onclick = t.onclick.bind(e)), t.target && (e.target = t.target)}i.hasChildNodes() && v(i, t)}}function w (e) { for (let t = 0;t < e.childElementCount;t++) {const s = e.children[t]
              'a' === s.tagName.toLowerCase() && (s.onclick = e => (window.open(s.href, '', 'height=450px,width=800px,menubar,toolbar,personalbar,status,resizable,noopener,noreferrer'), e.preventDefault(), e.stopPropagation(), !1)), s.hasChildNodes() && w(s)}}function x (e) {const t = Object.getOwnPropertyNames(e)
            for (const s of t) Object.defineProperty(e, s, {configurable: !0,writable: !1}); return e}function C (e) {return e.replace(/^https?:\/\//i, '')}const S = (() => {
            let e = !1
            return (t = {hasRecognition: !1,hasSynthesis: !1,isReset: !1,recognitionLocale: '',synthesisLocales: []}) => {
              var s
              t.isReset && (e = !1);let i = t.synthesisLocales
              return Array.isArray(i) || (i = []), t.hasRecognition && t.hasSynthesis && (null === (s = t.recognitionLocale) || void 0 === s ? void 0 : s.length) && (!e && t.synthesisLocales.length || (e = !0, i = [{lang: t.recognitionLocale}])), i}})()
          function y (e, t) {e = e.toLowerCase(); for (const s in t)if (e === s.toLowerCase())return !0;return !1}function _ (e, t) {e = e.toLowerCase().split('-')[0]; for (const s in t)if (e === s.toLowerCase())return !0;return !1}function T (e, t) {let s = [e.toLowerCase()],i = 'en'
            var n
            s = s.concat((null === (n = navigator.languages) || void 0 === n ? void 0 : n.map((e => e.toLowerCase()))) || []), s.indexOf(i) < 0 && s.push(i)
            for (const e of s) {
              if (y(e, t)) {i = e;break}if (_(e, t)) {i = e.split('-')[0];break} }
            return i}function k (e, t) {let s
            return function () {const i = this,n = arguments,o = function () {s = null, e.apply(i, n)}
              clearTimeout(s), s = setTimeout(o, t)}}function I (e, t, s) {return e.replace(new RegExp(`(${s}: )(.*?)(;|})`, 'g'), `$1${t}$3`)}var A,E = s(729)
          function L (e) {return e.filter((e => {
              const t = e.getActionType()
              return t === E.a.Postback || t === E.a.Location}))}
          class M {
            constructor (e, t) {this.util = e, this._disabled = !1, this._type = t.type, this._label = t.label, this._imageUrl = t.imageUrl}
            render () {const e = this.util
              if (this._htmlElement = e.createButton(['action-postback']), this._htmlElement.onclick = this.handleOnClick.bind(this), this._imageUrl) {const t = e.createImage(this._imageUrl, ['action-image'], this._label || '')
                this._htmlElement.appendChild(t)}if (this._label) {const t = e.linkify(this._label, {emHTML: !0}),s = e.createDiv()
                s.innerHTML = t, this._htmlElement.appendChild(s), this._htmlElement.title = this._htmlElement.textContent}return this._disabled && e.addCSSClass(this._htmlElement, 'disabled'), this._htmlElement}
            handleOnClick (e) {if (this.onActionClick && !this._disabled) {const e = {getPayload: this.getEventPayload.bind(this),label: this._label,type: this._type}
                this.onActionClick(e)}this._type !== E.a.Postback && this._type !== E.a.Location && this._type !== E.a.Share || (e.preventDefault(), e.stopPropagation())}
            disable () {this._disabled = !0, this._htmlElement && (this.util.addCSSClass(this._htmlElement, 'disabled'), this._htmlElement.disabled = !0)}
            enable () {this._disabled = !1, this._htmlElement && (this.util.removeCSSClass(this._htmlElement, 'disabled'), this._htmlElement.disabled = !1)}
            getActionType () {return this._type}
          }
          class P extends M {
            constructor (e, t) {super(e, t), this._phoneNumber = t.phoneNumber}
            render () {const e = this.util,t = super.render()
              e.addCSSClass(t, 'action-call');const s = e.createAnchor(`tel:${this._phoneNumber}`, '')
              return this.onActionClick = () => {
                  s.click()}, t}
            getEventPayload () {return Promise.resolve(this._phoneNumber)}
          }
          class D extends M {
            render () {const e = this.util,t = super.render()
              return e.addCSSClass(t, 'action-location'), t}
            getEventPayload () {return this.getCurrentPosition()}
            getCurrentPosition () {return new Promise(((e, t) => {
                setTimeout((() => {
                  navigator.geolocation.getCurrentPosition((t => {
                    e({latitude: t.coords.latitude,longitude: t.coords.longitude})}), (e => {
                    t(e)}))}))}))}
          }
          class O extends M {
            constructor (e, t) {super(e, t), this._postback = t.postback}
            getEventPayload () {return Promise.resolve(this._postback)}
          }
          class B extends M {
            constructor (e, t, s) {super(e, t), this.shareText = s}
            render () {const e = this.util,t = super.render()
              return e.addCSSClass(t, 'action-share'), t}
            getEventPayload () {return Promise.resolve(this.shareText)}
          }
          class R extends M {
            constructor (e, t, s = !1 , i) {super(e, t), this._openInWindow = s, this._linkHandler = i, this._url = t.url}
            render () {const e = this.util,t = super.render()
              if (e.addCSSClass(t, 'action-url'), this._url) {const s = e.createAnchor(this._url, '', [], this._openInWindow, this._linkHandler)
                t.onclick = () => {
                  s.click()}}return t}
            getEventPayload () {return Promise.resolve(this._url)}
          }
          class z {
            static fromActionPayload (e, t, s, i, n, o) {switch (e.type) {case E.a.Postback:
                  return new O(t, e);case E.a.Url:
                  return new R(t, e, s, n);case E.a.Webview:
                  return new R(t, e, s, o.webviewLinkHandler);case E.a.Location:
                  return new D(t, e);case E.a.Call:
                  return new P(t, e);case E.a.Share:
                  return new B(t, e, i);default:
                  return z.logger.error(`Payload contains wrong action type:${e.type}`), null}}
          }
          z.logger = new o('ActionComponentFactory'), function (e) {e.LEFT = 'left', e.RIGHT = 'right'}(A || (A = {}))
          class V {
            constructor (e, t, s, i, n, o) {this.settings = e, this.util = t, this.side = i, this.source = n, this.actions = [], this.globalActions = [], this._postActions = [], this.locale = e.locale, this.translations = e.i18n[this.locale], o && o.locale && (this.locale = o.locale, this.translations = Object.assign(Object.assign({}, this.translations), this.settings.i18n[o.locale]));let a = ''
              switch (s.type) {case E.h.Card:
                  s.cards.forEach((e => {
                    var t
                    a += (e.title ? `${e.title} - ` : '') + (e.description ? `${e.description} - ` : '') + (null !== (t = e.url) && void 0 !== t ? t : '') + '\n'}))
                  break;case E.h.Text:
                  a = s.text
                  break;case E.h.Attachment:
                  a = s.attachment.url
                  break;case E.h.Location:
                  const e = s.location
                  a = `${e.title?`${e.title} - `:""}${e.latitude}, ${e.longitude}`}if (s.actions && (this.actions = N(s.actions, t, e.openLinksInNewWindow, a, e.linkHandler, o, this.handleOnActionClick.bind(this))), this._isActionsExternal = e.displayActionsAsPills, s.globalActions) {const i = N(s.globalActions, t, e.openLinksInNewWindow, a, e.linkHandler, o, this.handleOnActionClick.bind(this))
                this.globalActions = this.globalActions.concat(i)}this.headerText = s.headerText, this.footerText = s.footerText, this._postActions = L(this.actions).concat(L(this.globalActions))}
            handleOnActionClick (e) {if (this.onActionClick) {const t = e
                t.messageComponent = this, this.onActionClick(t)}}
            hasActions () {return this.actions.length > 0 || this.globalActions.length > 0}
            focusFirstAction () {var e
              null === (e = this.firstActionButton) || void 0 === e || e.focus()}
            disableActions () {this.actions.forEach((e => {
                e.disable()})), this.globalActions.forEach((e => {
                e.disable()}))}
            disablePostbacks () {this._postActions.forEach((e => {
                e.disable()}))}
            enableActions () {this.actions.forEach((e => {
                e.enable()})), this.globalActions.forEach((e => {
                e.enable()}))}
            enablePostbacks () {this._postActions.forEach((e => {
                e.enable()}))}
            render (e) {const t = this,s = t.util,i = t.actions,n = t.globalActions,o = s.createDiv(['message'])
              o.lang = t.locale;const a = s.createDiv(['message-wrapper'])
              o.appendChild(a);const r = t.getContent(e)
              if (t.headerText && a.appendChild(t.getHeader()), a.appendChild(r), i && i.length) {const e = t.getActions();(t._isActionsExternal ? a : r).appendChild(e), t.firstActionButton || (t.firstActionButton = e.firstElementChild)}if (t.footerText && a.appendChild(t.getFooter()), n && n.length) {const e = t.getGlobalActions()
                o.appendChild(e), t.firstActionButton || (t.firstActionButton = e.firstElementChild)}return o}
            getHeader () {return F(this.headerText, 'message-header', this.util)}
            getContent (e) {const t = this.util.createDiv(['message-bubble'])
              return t.style.padding = this.settings.messagePadding || t.style.padding, e && t.appendChild(e), t}
            getActions () {const e = this._isActionsExternal ? ['message-global-actions'] : ['message-actions']
              return 'horizontal' !== this.settings.actionsLayout && e.push('col'), U(this.actions, e, this.util)}
            getFooter () {return F(this.footerText, 'message-footer', this.util)}
            getGlobalActions () {const e = ['message-global-actions']
              return this.settings.icons.avatarBot && e.push('has-message-icon'), 'horizontal' !== this.settings.globalActionsLayout && e.push('col'), U(this.globalActions, e, this.util)}
          }
          function N (e, t, s, i, n, o, a) {const r = []
            return e.forEach((e => {
                const c = z.fromActionPayload(e, t, s, i, n, o)
                c && (c.onActionClick = a, r.push(c))})), r}function F (e, t, s) {const i = s.createDiv(['message-bubble', t]),n = s.createDiv()
            return n.innerHTML = s.linkify(e, {emHTML: !0,emVideo: !0}), i.appendChild(n), i}function U (e, t, s) {const i = s.createDiv(t)
            return e.forEach((e => {
                i.appendChild(e.render())})), i}
          class H {
          }
          H.GEOLOCATION_REQUEST_DENIED = 1, H.CHAT_SCROLL_DELAY = 300, H.WEBSOCKET_READY_STATE = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'], H.WEBSOCKET_CLOSE_EVENT = {CODE: {ABNORMAL_CLOSURE: 1006}}, H.ATTACHMENT_HEADER = {AUTHORIZATION: 'Authorization',FILE_AUTH_TYPE: 'x-oda-meta-file-authType',FILE_IS_PROTECTED: 'x-oda-meta-file-isProtected',FILE_SIZE: 'x-oda-meta-file-size'}, H.MAX_SUGGESTIONS_COUNT = 5, H.MIN_SUGGESTIONS_COUNT = 1, H.SUGGESTIONS_COUNT_THRESHOLD = 30, H.TIME = {MIN_FIFTY: 3e6};const $ = '22.10',j = 1024,W = 26214400,G = Ce('<path d="M11.007 15.117A1 1 0 0 0 13 15V7l-.005-.176A3 3 0 0 0 7 7v8l.005.217A5 5 0 0 0 17 15V5h2v10a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v8l-.005.176A3 3 0 0 1 9 15V9h2v6z"/>'),Y = Ce('<path d="M4 2h10.414L20 7.586V10h-2V9h-5V4H6v16h12v-1h2v3H4zm11 3.414L16.586 7H15z"/><path d="m7.764 17 1.849-4.87h1.012L12.486 17H11.32l-.32-.998H9.204L8.882 17zm1.722-1.883h1.226l-.617-1.916zm3.278-.415v-2.573h1.045v2.553c0 .531.079.916.235 1.152.156.233.404.349.744.349.344 0 .591-.116.743-.349.157-.236.235-.62.235-1.152v-2.553h1.045v2.573c0 .822-.165 1.427-.496 1.816-.326.384-.835.576-1.527.576s-1.204-.192-1.535-.576c-.326-.389-.489-.994-.489-1.816zM17.686 17v-4.87h1.635c.795 0 1.396.205 1.802.616.407.41.61 1.018.61 1.822 0 .795-.203 1.4-.61 1.816-.402.41-1.002.616-1.802.616zm1.622-4.02h-.577v3.17h.577c.45 0 .786-.128 1.005-.383.223-.259.335-.659.335-1.2s-.11-.94-.329-1.198c-.218-.26-.556-.389-1.011-.389z"/>'),q = Ce('<path d="M6.35 8L5 9.739 12 16l7-6.261L17.65 8 12 13.054z"/>'),K = Ce('<path d="M8 17.65L9.739 19 16 12 9.739 5 8 6.35 13.054 12z"/>'),J = Ce('<path d="M16 17.65L14.261 19 8 12l6.261-7L16 6.35 10.946 12z"/>'),Z = Ce('<path d="M6 11h8v2H6zm0-4h12v2H6z"/><path d="M2 2v20h3.5l3-4H14v-2H7.5l-3 4H4V4h16v6h2V2z"/><path d="M20.3 12.3L19 13.6l-1.3-1.3-1.4 1.4 1.3 1.3-1.3 1.3 1.4 1.4 1.3-1.3 1.3 1.3 1.4-1.4-1.3-1.3 1.3-1.3z"/>'),X = Ce('<path d="M17.524 5 19 6.476 13.475 12 19 17.524 17.524 19 12 13.475 6.476 19 5 17.524 10.525 12 5 6.476 6.476 5 12 10.525z"/>'),Q = Ce('<path d="M11 13v9H9v-5.586l-6.293 6.293-1.414-1.414L7.586 15H2v-2zM21.293 1.293l1.414 1.414L16.414 9H22v2h-9V2h2v5.586z"/>'),ee = Ce('<path d="M4 15v5h16v-5h2v7H2v-7zm9-13v10.587l3.293-3.294 1.414 1.414L12 16.414l-5.707-5.707 1.414-1.414L11 12.585V2z"/>'),te = Ce('<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.707 7.293l8 8-1.414 1.414-8-8z"/></svg>'),se = Ce('<path class="st0" d="M20 20H4V4h7V2H2v20h20v-9h-2z"/><path xmlns="http://www.w3.org/2000/svg" class="st0" d="M14 2v2h4.6L8.3 14.3l1.4 1.4L20 5.4V10h2V2z"/>'),ie = Ce('<path d="M14.414 2 21 8.584V22H3V2.009zM13 3.999l-8 .007v15.995h14V9.996l-6 .001zm4.585 3.998L15 5.413v2.585z"/>'),ne = Ce('<path d="M4 2h10.414L20 7.586V22H4zm2 2v16h12V9h-5V4zm9 1.414L16.586 7H15z"/><path d="M16 12a1 1 0 11-2 0 1 1 0 012 0zm-6.143 1L7 19h10l-2.857-4.5L12 16.75z"/>'),oe = Ce('<path d="M22 5v14H2V5zm-2 2H4v10h16zM7 13v2H5v-2zm12 0v2h-2v-2zm-4 0v2H9v-2zM7 9v2H5V9zm12 0v2h-2V9zm-4 0v2h-2V9zm-4 0v2H9V9z" />'),ae = Ce('<path d="M13 14c-1.5 0-2.9-.4-4-1.1 1.1-2.4 1.7-5 1.9-6.9h9V4H7V2H5v2H2v2h6.9c-.2 1.7-.7 3.7-1.5 5.6C6.5 10.5 6 9.2 6 8H4c0 1.9.9 4 2.5 5.5C5.3 15.5 3.8 17 2 17v2c2.6 0 4.6-1.9 6.1-4.3 1.4.8 3 1.3 4.9 1.3zm7.6 4.6L17 10.5l-3.6 8.1-1.3 3 1.8.8L15 20h4l1.1 2.4 1.8-.8zm-4.7-.6l1.1-2.5 1.1 2.5z"/>'),re = '<svg width="36" height="36" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 8.625a2.25 2.25 0 00-2.25 2.25v16c0 .621.504 1.125 1.125 1.125h.284c.298 0 .585-.119.796-.33l2.761-2.76a2.25 2.25 0 011.59-.66h15.944a2.25 2.25 0 002.25-2.25V10.875a2.25 2.25 0 00-2.25-2.25H7.875zM24.75 18a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-4.5-2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-9 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#fff"/></svg>',ce = Ce('<path d="M4.014 3C2.911 3 2 3.888 2 4.992v15c0 .6.408 1.008 1.007 1.008h.6a.887.887 0 0 0 .695-.288l3.094-3.12c.407-.384.91-.6 1.415-.6h11.175C21.089 16.992 22 16.104 22 15V4.992C22 3.888 21.089 3 19.986 3zm3.981 7.008A1.986 1.986 0 0 1 6.005 12c-1.103 0-1.99-.888-1.99-1.992s.887-2.016 1.99-2.016 1.99.912 1.99 2.016zm5.995 0C13.99 11.112 13.103 12 12 12s-1.99-.888-1.99-1.992.887-2.016 1.99-2.016 1.99.912 1.99 2.016zm5.996 0c0 1.104-.888 1.992-1.99 1.992s-1.991-.888-1.991-1.992.887-2.016 1.99-2.016 1.99.912 1.99 2.016z" fill="#fff"/>'),le = Ce('<path d="M7 22v-2h4v-2.062C7.06 17.444 4 14.073 4 10h2c0 3.309 2.691 6 6 6s6-2.691 6-6h2c0 4.072-3.059 7.444-7 7.938V20h4v2h-6zm5-20c2.206 0 4 1.794 4 4v4c0 2.206-1.794 4-4 4s-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2s2-.897 2-2V6c0-1.103-.897-2-2-2z"/>'),he = Ce('<path d="M19.33 23.02l-7.332-3.666-7.332 3.666 1.418-7.995L1 9.555l7.331-1.222L11.998 1l3.666 7.333 7.332 1.222-5.084 5.47z"/>'),de = Ce('<path d="M13 22V5.414l5.293 5.293 1.414-1.414L12 1.585 4.293 9.293l1.414 1.414L11 5.414V22h2z" fill="#161513"/>'),pe = Ce('<path d="M22 2v20H2V2zm-2 2H4v16h16zm-3 1.674V14a2 2 0 11-2.15-1.995L15 12V8.326l-5 1.428V16a2 2 0 11-2.15-1.995L8 14V8.246z"/>'),ue = Ce('<path d="M13.414 2L17 5.586V7h.414L21 10.586V22H7v-4H3V2zM17 9.414V18H9v2h10v-8.586zm-2-3L12.586 4H5v12h10zM13 11v2H7v-2zm-2-4v2H7V7z"/>'),ge = Ce('<path d="M12 2c3.874 0 6.994 3.28 6.99 7.214l.011.285c.008.927-.202 2.23-.787 3.837-.96 2.639-2.73 5.452-5.49 8.353L12 22.45l-.724-.761c-2.76-2.901-4.53-5.714-5.49-8.353-.627-1.722-.823-3.095-.782-4.03l.006-.252C5.134 5.147 8.205 2 12 2zm0 2C9.254 4 7.006 6.362 7.002 9.386L7 9.529c-.004.694.168 1.753.667 3.123.741 2.036 2.038 4.221 4.014 6.507l.32.365.32-.365c1.867-2.159 3.127-4.228 3.886-6.166l.128-.34c.535-1.469.694-2.58.664-3.259l-.008-.32C16.879 6.244 14.676 4 12 4zm0 2a3 3 0 1 1-.001 6A3 3 0 0 1 12 6zm0 2a1 1 0 1 0 .001 2A1 1 0 0 0 12 8z"/>'),me = Ce('<path d="M22 2v16h-4v4H2V6h4V2zm-9.036 12.378L6.93 20H16v-2.585zM16 8H4v11.999l9.036-8.377L16 14.585zm4-4H8v2h10v10h2zM7 9a2 2 0 110 4 2 2 0 010-4z"/>'),fe = Ce('<path d="M1.707.293l22 22-1.414 1.414L12 13.414V21l-6.35-5.114H1V7.954h4.65l.5-.39L.293 1.707zM19.67 4.446c2.119 1.967 3.302 4.613 3.33 7.452a10.363 10.363 0 01-1.392 5.295l-1.476-1.476c.58-1.18.88-2.472.868-3.8-.023-2.29-.981-4.43-2.697-6.025zM7.583 8.996l-1.232.955H3v3.964h3.351L10 16.875v-5.461zm8.051-1.68C17.15 8.547 17.991 10.21 18 11.999c.003.482-.055.956-.17 1.416l-1.86-1.86c-.133-1.017-.691-1.964-1.604-2.706zM12 3v4.586L9.424 5.01z"/>'),be = Ce('<path d="M13 3v18l-6.35-5.114H2V7.954h4.65zm5.67 1.446c2.119 1.967 3.302 4.613 3.33 7.452.029 2.904-1.15 5.658-3.316 7.75l-1.396-1.421c1.772-1.71 2.735-3.95 2.712-6.31-.023-2.29-.981-4.43-2.697-6.025zM11 7.125L7.351 9.95H4v3.964h3.351L11 16.875zm4.634.19C17.15 8.548 17.991 10.212 18 12c.01 1.806-.828 3.5-2.358 4.771l-1.284-1.519c1.065-.885 1.65-2.037 1.642-3.242-.006-1.187-.587-2.309-1.634-3.16z"/>'),ve = Ce('<path d="M4 2h10.414L20 7.586V10h-2V9h-5V4H6v16h12v-1h2v3H4zm11 3.414L16.586 7H15z"/><path d="m12.36 17-1.796-4.87h1.18l1.138 3.584 1.153-3.585h1.132L13.37 17zm3.33 0v-4.87h1.046V17zm1.996 0v-4.87h1.635c.795 0 1.396.205 1.802.616.407.41.61 1.018.61 1.822 0 .795-.203 1.4-.61 1.816-.402.41-1.002.616-1.802.616zm1.622-4.02h-.577v3.17h.577c.45 0 .786-.128 1.005-.383.223-.259.335-.659.335-1.2s-.11-.94-.329-1.198c-.218-.26-.556-.389-1.011-.389z"/>'),we = Ce('<path d="M11 11h2v4h-2zm0 6h2v2h-2z"/><path d="M12 1.8L1.9 22h20.2L12 1.8zm0 4.4L18.9 20H5.1L12 6.2z"/>'),xe = Ce('<path d="M11 2a9 9 0 017.032 14.617l3.675 3.676-1.414 1.414-3.676-3.675A9 9 0 1111 2zm0 2a7 7 0 100 14 7 7 0 000-14zm1 3v3h3v2h-3v3h-2v-3H7v-2h3V7z"/>')
          function Ce (e) {return`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24">${e}</svg>`}const Se = 'aria-expanded',ye = 'aria-activedescendant',_e = 'expand',Te = /http/gi,ke = 'ODA_MASK_3-2-0',Ie = new RegExp(ke, 'gi'),Ae = /www/gi,Ee = 'ODA_MASK_2-6-1',Le = new RegExp(Ee, 'gi'),Me = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim,Pe = /([-+&@#/%?=~_|!:,.;])?(\bwww\.[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim
          class De {
            constructor (e) {this.openPopupList = [], this.cssPrefix = e.name, this.locale = e.i18n[e.locale]}
            addCSSClass (e, ...t) {
              e.classList ? t.forEach((t => e.classList.add(`${this.cssPrefix}-${t}`))) : e.setAttribute('class', t.reduce(((e, t) => `${e} ${this.cssPrefix}-${t}`), ''))}
            createAnchor (e, t, s = [] , i = !1 , n) {const o = this.createElement('a', s)
              o.rel = 'noreferrer noopener';let a = !1
              return o.href = e, o.innerText = t, n && (n.onclick && (o.onclick = n.onclick.bind(o), a = !0), n.target && (o.target = n.target, a = !0)), a || (i ? o.addEventListener('click', (t => (window.open(e, '', 'height=450px,width=800px,menubar,toolbar,personalbar,status,resizable,noopener,noreferrer'), t.preventDefault(), t.stopPropagation(), !1))) : o.target = '_blank'), o}
            createButton (e = []) {const t = 'button',s = this.createElement(t, [...e, 'flex'])
              return s.type = t, s}
            createDiv (e = []) {return this.createElement('div', e)}
            createElement (e, t = []) {const s = document.createElement(e)
              return this.addClasses(s, t), s}
            createElementFromString (e, t = []) {const s = this.createDiv()
              s.innerHTML = e.trim();const i = s.firstElementChild
              return t && this.addClasses(s.firstElementChild, t), i}
            createIconButton ({css:e, icon:t, title:s, iconCss:i}) {const n = this.createButton(['icon', ...e])
              n.innerHTML = '', n.title = s;const o = this.createImageIcon({icon: t,iconCss: i,title: s})
              return n.appendChild(o), n}
            createImage (e, t = [] , s) {const i = this.createElement('img', t)
              return e && (i.src = e), s && (i.alt = s), i.setAttribute('draggable', 'false'), i}
            createImageIcon ({icon:e, title:t, iconCss:s}) {if ((e => {
                  const t = e.match(/<svg\s/gi)
                  return t && t.length > 0})(e)) {const i = this.createElementFromString(e, s)
                return i.setAttribute('role', 'img'), i.setAttribute('aria-label', t), i}return this.createImage(e, s, t)}
            createListItem (e, t, s, i, n, o, a = !1) {const r = this.createElement('li', [n, a && 'with-sub-menu'])
              if (r.id = e, r.tabIndex = -1, r.setAttribute('dir', 'auto'), r.setAttribute('role', 'menuitem'), s && r.setAttribute('data-value', s), i) {const e = this.createImageIcon({icon: i,iconCss: ['icon', `${n}-icon`],title: t})
                r.appendChild(e)}const c = this.createElement('span', ['text', `${n}-text`, 'ellipsis'])
              return c.innerText = t, r.title = t, r.appendChild(c), o && Be(r, 'click', o), r}
            createMedia (e, t = [] , s) {const i = this.createElement(e, t)
              return s && (i.src = s), i.autoplay = !1, i}
            getBanner (e, t) {const s = this.createDiv(['dialog-wrapper']),i = 'prompt-banner',n = this.createDiv(['prompt-banner-background']),o = this.createDiv(['prompt-banner-main-content', 'flex']),a = this.createDiv(['prompt-banner-content']),r = this.createDiv([i])
              if (e.icon) {const t = this.createImageIcon({icon: e.icon,title: ''}),s = this.createDiv(['prompt-banner-icon'])
                Oe(s, t), Oe(o, s)}const c = this.createDiv(['prompt-banner-text'])
              if (c.innerText = e.text, c.setAttribute('role', 'alert'), Oe(a, c), e.description) {const t = this.createDiv(['prompt-banner-description'])
                t.innerText = e.description, Oe(a, t)}Oe(o, a), Oe(r, o);const l = e.closeIcon || X,h = 'prompt-banner-close-button',d = this.createIconButton({css: [h, 'flex'],icon: l,title: e.closeText,iconCss: [`${h}-icon`]}),p = 'prompt-banner-out'
              Be(d, 'click', (() => {
                this.addCSSClass(r, p), setTimeout((() => {
                  this.removeCSSClass(r, p), s.remove()}), 200)})), e.autoClose && setTimeout((() => {
                d && d.click()}), 6e3);const u = e.actions
              if (u && u.length) {const e = this.createDiv(['action-wrapper', 'flex'])
                u.forEach((s => {
                  const i = ['popup-action']
                  'filled' === s.type && i.push('filled');const n = this.createButton(i)
                  n.innerHTML = s.label, n.onclick = s.handler.bind(t), e.appendChild(n)})), r.appendChild(e)}return Oe(r, d), Oe(s, n), Oe(s, r), s}
            getMenu (e) {const t = this.createElement('ul', ['popup', ...e.menuClassList])
              t.id = e.menuId, t.tabIndex = -1, t.setAttribute('role', 'menu'), t.setAttribute('aria-labelledby', e.buttonId);const s = e.menuItems
              if (s.forEach((e => t.appendChild(e))), e.defaultValue) {const s = t.querySelector(`[data-value="${e.defaultValue}"]`)
                this.addCSSClass(s, 'active')}return Be(t, 'click', (() => this.popupClose(t, e.menuButton))), Be(t, 'keydown', (i => {
                  let o = !1
                  if (!(i.ctrlKey || i.altKey || i.metaKey)) {if (i.shiftKey && i.code === n.d.Tab)this.popupClose(e.menuButton, t);else switch (i.code) {case n.d.Return:
                        case n.d.Space:
                          i.target.click(), o = !0
                          break;case n.d.Esc:
                        case n.d.Tab:
                          this.popupClose(e.menuButton, t), i.code === n.d.Esc && (o = !0)
                          break;case n.d.Up:
                          this.popupFocusPreviousItem(t), o = !0
                          break;case n.d.Down:
                          this.popupFocusNextItem(t), o = !0
                          break;case n.d.Home:
                        case n.d.PageUp:
                          this.popupFocusFirstItem(t, s), o = !0
                          break;case n.d.End:
                        case n.d.PageDown:
                          this.popupFocusLastItem(t, s), o = !0}o && (i.stopPropagation(), i.preventDefault())}})), t}
            getMenuButton (e) {const t = e.button,s = e.menu,i = s.querySelectorAll('li'),o = t.classList.contains(`${this.cssPrefix}-with-sub-menu`)
              return t.setAttribute('role', 'button'), t.setAttribute('aria-haspopup', 'true'), t.setAttribute('aria-controls', e.menuId), Be(t, 'click', (() => {
                  const s = document.getElementById(e.menuId)
                  t.hasAttribute(Se) ? this.popupClose(t, s) : this.popupOpen(t, s, o)})), Be(t, 'keydown', (e => {
                  let a = !1
                  switch (e.code) {case n.d.Return:
                    case n.d.Down:
                    case n.d.Space:
                      this.popupOpen(t, s, o), this.popupFocusFirstItem(s, i), a = !0
                      break;case n.d.Up:
                      this.popupOpen(t, s, o), this.popupFocusLastItem(s, i), a = !0}a && (e.stopPropagation(), e.preventDefault())})), t}
            wrapMessageBlock (e = A.LEFT , t, s) {const i = this.createDiv(['message-block', 'flex', e]),n = this.createDiv(['messages-wrapper']),o = this.createDiv(['message-list', 'flex', 'col'])
              if (s) {const t = this.createImageIcon({icon: s,iconCss: ['message-icon'],title: e === A.LEFT ? this.locale.avatarBot : this.locale.avatarUser}),n = this.createDiv(['icon-wrapper'])
                n.appendChild(t), i.appendChild(n)}return o.appendChild(t), n.appendChild(o), i.appendChild(n), i}
            getMessageBlock (e, t, s, i = !1) {const n = 'message',o = this.createDiv([n]),a = this.createDiv(['message-wrapper']),r = this.createDiv(['message-bubble', i && 'error'])
              return r.appendChild(t), a.appendChild(r), o.appendChild(a), this.wrapMessageBlock(e, o, s)}
            linkify (e, t) {t = t || {};const s = this.maskElements(e),i = t.emHTML ? s : b(s),n = i && i.replace(m(Me), ((e, s) => this.parseVideoOrLink(s, t.emVideo))),o = n && n.replace(m(Pe), ((e, s, i) => s ? e : this.parseVideoOrLink(i, t.emVideo)))
              return this.unmaskElements(o)}
            removeCSSClass (e, ...t) {var s,i
              if (e.classList)t.forEach((t => e.classList.remove(`${this.cssPrefix}-${t}`)))
              else {const t = 'class',n = null !== (i = null === (s = e.getAttribute(t)) || void 0 === s ? void 0 : s.split(' ')) && void 0 !== i ? i : []
                if (n.length) {const s = n.filter((e => n.indexOf(`${this.cssPrefix}-${e}`) < 0)).join(' ')
                  e.setAttribute(t, s)}}}
            setLocale (e) {this.locale = e}
            addClasses (e, t = []) {return e.setAttribute('dir', 'auto'), t && this.addCSSClass(e, ...t), e}
            embedYouTube (e) {return`<div class="${this.cssPrefix}-youtube-wrapper"><iframe width="100%" src="https://www.youtube.com/embed/${e}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`}
            getEmbedOVH (e) {return`<div class="${this.cssPrefix}-ovh-wrapper"><iframe src="https://cdnapisec.kaltura.com/p/2171811/sp/217181100/embedIframeJs/uiconf_id/35965902/partner_id/2171811?iframeembed=true&playerId=kaltura_player&entry_id=${e}&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_yz4xoltb" width="100%" height="auto" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0"></iframe></div>`}
            maskElements (e) {const t = this.createDiv()
              t.innerHTML = e;const s = t.children
              for (let e = 0;e < s.length;e++)s[e].outerHTML = s[e].outerHTML.replace(m(Te), ke).replace(m(Ae), Ee);return t.innerHTML}
            unmaskElements (e) {return e.replace(m(Le), 'www').replace(m(Ie), 'http')}
            parseVideoOrLink (e, t) {const s = t ? u(e) : null
              if (s)return this.embedYouTube(s);const i = t ? function (e) {let t
                return e.replace(m(g), ((e, s) => (s && s.length && (t = s), e))), t}(e) : null
              return i ? this.getEmbedOVH(i) : `<a href="${e}" target="_blank" rel="noreferrer">${e}</a>`}
            popupClose (e, t) {e.getAttribute(Se) && (this.removeCSSClass(t, _e), e.removeAttribute(Se))}
            popupFocusFirstItem (e, t) {this.popupFocusItem(t[0], e)}
            popupFocusLastItem (e, t) {this.popupFocusItem(t[t.length - 1], e)}
            popupFocusPreviousItem (e) {const t = e.getAttribute(ye),s = e.querySelector(`#${t}`)
              this.popupFocusItem(s.previousSibling || e.lastChild, e)}
            popupFocusNextItem (e) {const t = e.getAttribute(ye),s = e.querySelector(`#${t}`)
              this.popupFocusItem(s.nextSibling || e.firstChild, e)}
            popupFocusItem (e, t) {e.focus(), t.setAttribute(ye, e.id)}
            popupOpen (e, t, s = !1) {if (!e.getAttribute(Se)) {this.addCSSClass(t, _e), e.setAttribute(Se, 'true');const i = document.querySelector(`.${this.cssPrefix}-widget`),n = i.getBoundingClientRect(),o = e.getBoundingClientRect(),a = 'rtl' === window.getComputedStyle(t).direction
                if (s) {const s = 48
                  t.style.top = `${e.offsetTop+e.offsetHeight+60}px`, a ? t.style.left = `${s}px` : t.style.right = `${s}px`, t.style.maxWidth = i.offsetWidth - s + 'px'}else {let e = n.right - o.right
                  a ? (e = o.left - n.left, t.style.left = `${e}px`) : t.style.right = `${e}px`, t.style.maxWidth = i.offsetWidth - e + 'px'}setTimeout((() => {
                  const s = document.querySelectorAll(`.${this.cssPrefix}-with-sub-menu`)
                  document.addEventListener('click', (i => {
                    let n = !1
                    s.forEach((e => {
                      e.contains(i.target) && (n = !0)})), n ? this.openPopupList.push({menu: t,menuButton: e}) : (this.openPopupList.length && this.openPopupList.forEach((e => {
                      this.popupClose(e.menuButton, e.menu)})), this.popupClose(e, t))}), {once: !0})}))}}
          }
          function Oe (e, t) {e.appendChild(t)}function Be (e, t, s, i) {e.addEventListener(t, s, i)}
          class Re {
            remove () {this.element.remove()}
            appendToElement (e) {e.appendChild(this.element)}
            prependToElement (e) {const t = e.firstChild
              t ? e.insertBefore(this.element, t) : e.appendChild(this.element)}
            appendContentChildElement (e) {this._getContentElement().appendChild(e)}
            appendContentChild (e) {this._getContentElement().appendChild(e.element)}
            _getContentElement () {return this.element}
          }
          var ze,Ve,Ne,Fe,Ue
          !function (e) {e.SESSION = 'sessionStorage', e.LOCAL = 'localStorage'}(ze || (ze = {})), function (e) {e.CLASSIC = 'classic', e.DEFAULT = 'default', e.REDWOOD_DARK = 'redwood-dark'}(Ve || (Ve = {})), function (e) {e.AUDIO = 'audio', e.FILE = 'file', e.LOCATION = 'location', e.VISUAL = 'visual'}(Ne || (Ne = {})), function (e) {e.ARROW_DOWN = 'ArrowDown', e.ARROW_UP = 'ArrowUp', e.ENTER = 'Enter'}(Fe || (Fe = {})), function (e) {e[e.KEYBOARD = 0] = 'KEYBOARD', e[e.VOICE = 1] = 'VOICE'}(Ue || (Ue = {}));const He = {AUDIO: '.aac, .amr, .m4a, .mp3, .mp4a, .mpga, .oga, .ogg, .wav, audio/*',FILE: '.7z, .csv, .doc, .docx, .eml, .ics, .key, .log, .msg, .neon, .numbers, .odt, .pages, .pdf, .pps, .ppsx, .ppt, .pptx, .rtf, .txt, .vcf, .xls, .xlsx, .xml, .yml, .yaml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',IMAGE: '.gif, .jfif, .jpeg, .jpg, .png, .svg, .tif, .tiff, .webp, image/*',VIDEO: '.3g2, .3gp, .avi, .m4v, .mov, .mp4, .mpeg, .mpg, .ogv, .qt, .webm, .wmv, video/*',ALL: ''}
          He.ALL = `${He.AUDIO},${He.FILE},${He.IMAGE},${He.VIDEO}`
          class $e extends Re {
            constructor (e, t, s, i, o, a, r, c, l) {if (super(), this.util = e, this.onSend = t, this.onUpload = s, this.settings = i, this.onQueryChange = o, this.onSpeechToggle = a, this.onShareLocation = r, this.eventDispatcher = c, this.widget = l, this.mode = void 0, this.fileMaxSize = W, this._navKeys = [], this.isDisabledVoiceButtonLang = !1, this.isDisabledVoiceButtonNetwork = !1, this.recognitionRequested = !1, this.isFocusableDevice = !0, this.isTyping = !1, this.cssPrefix = i.name, this.i18n = i.i18n, this.icons = i.icons, this.locale = this.i18n[i.locale], this.isFocusableDevice = !(0, n.k)(), this._shareBtnID = `${this.cssPrefix}-share-button`, this.element = this._createElement(), i.enableSpeech) {const e = this._createVoiceComponent()
                this.element.appendChild(e)}const h = this._createKeyboardComponent()
              this.element.appendChild(h), this.setInputMode(Ue.KEYBOARD), this.disable(!0), window.addEventListener('resize', k((() => {
                this._expand()}), 100))}
            setInputMode (e) {e !== this.mode && (this.settings.enableSpeech ? (this.mode = e, this.mode === Ue.KEYBOARD ? this._showKeyboardMode() : this._showVoiceMode()) : (this.mode = Ue.KEYBOARD, this._showKeyboardMode()))}
            setUserInputText (e) {this._textArea && (this._textArea.value = e, this._textArea.setSelectionRange(e.length, e.length), this.focusTextArea(), this.updateSendButtonDisabledState())}
            getUserInputText () {return this._textArea.value}
            setUserInputPlaceholder (e) {this._textArea && Ye(this._textArea, e)}
            setVoiceRecording (e) {this.settings.enableSpeech && (e && this.recognitionRequested ? this.setInputMode(Ue.VOICE) : e || this.setInputMode(Ue.KEYBOARD))}
            updateVisualizer (e, t) {this.mode === Ue.VOICE && (0, n.f)(e, this._visualizerCanvas, t)}
            focusTextArea () {this.isFocusableDevice && this._textArea.focus(), this._textArea.scrollTop = this._textArea.scrollHeight}
            render (e) {}
            disable (e = !0) {const t = this.util,s = 'disabled'
              this.settings.enableAttachment && (this._shareButton.disabled = e), e ? (t.addCSSClass(this._textArea, s), this.settings.enableAutocomplete && (this._invalidateSuggestions(), this._removeSuggestionsPopup())) : (t.removeCSSClass(this._textArea, s), this.updateSendButtonDisabledState()), this.settings.enableSpeech && (this.setInputMode(Ue.KEYBOARD), this.disableVoiceModeButton(e, {src: 'network'})), this.isFooterDisabled = e}
            isDisabled () {return this.isFooterDisabled}
            disableVoiceModeButton (e, {src:t}) {if (this.settings.enableSpeech) {switch (t) {case 'lang':
                    this.isDisabledVoiceButtonLang = e
                    break;case 'network':
                    this.isDisabledVoiceButtonNetwork = e}
                this.settings.multiLangChat && (this.isDisabledVoiceButtonLang || this.isDisabledVoiceButtonNetwork) ? this._switchToVoiceModeButton.disabled = !0 : this._switchToVoiceModeButton.disabled = this.isDisabledVoiceButtonNetwork}}
            displaySuggestions (e) {if (this._removeSuggestionsPopup(), 0 === e.length)this._suggestions = e, this._isSuggestionsValid = !1
              else if (this._textArea.value) {this._currentSuggestionFocus = e.length > H.MAX_SUGGESTIONS_COUNT ? H.MAX_SUGGESTIONS_COUNT : e.length < H.MIN_SUGGESTIONS_COUNT ? H.MIN_SUGGESTIONS_COUNT : e.length, this._suggestions = e, this._isSuggestionsValid = !0;const t = this.util.createDiv(this.settings.enableAttachment ? ['autocomplete-items'] : ['autocomplete-items', 'no-attach'])
                t.setAttribute('role', 'list');const s = this._textArea.value.trim()
                t.id = $e.SUGGESTIONS_ID; for (let i = this._currentSuggestionFocus - 1;i > -1;i--) {const n = this._createSuggestionListItem(e[i], s)
                  t.appendChild(n)}this.element.appendChild(t)}}
            getSuggestions () {return this._suggestions}
            getSuggestionsValid () {return this._isSuggestionsValid}
            setLocale (e) {if (this.locale = e, this._shareButton) {const t = e.upload
                We(this._uploadFileInput, t), this._shareMenu.querySelectorAll('li').forEach((e => {
                  const t = e.dataset.value,s = this.locale[`share${t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()}`] || this.locale[t] || e,i = e.querySelector('svg') || e.querySelector('img')
                  'img' === i.localName ? i.alt = s : i.setAttribute('aria-label', s), e.querySelector('span').innerText = s}))}this.setUserInputPlaceholder(e.inputPlaceholder), this._sendButton && Ge(this._sendButton, e.send), this._switchToVoiceModeButton && Ge(this._switchToVoiceModeButton, e.speak)}
            _createElement () {return this.util.createDiv(['footer'])}
            _showKeyboardMode () {var e
              const t = this.util
              t.removeCSSClass(this.element, 'mode-voice'), t.addCSSClass(this.element, 'mode-keyboard'), this.updateSendButtonDisabledState(), this.settings.enableAutocomplete && (null === (e = this._textArea.value) || void 0 === e ? void 0 : e.trim().length) >= 3 && this._setSuggestionsRequestTimer()}
            _showVoiceMode () {const e = this.util
              e.removeCSSClass(this.element, 'mode-keyboard'), e.addCSSClass(this.element, 'mode-voice'), this.updateSendButtonDisabledState(), this._textArea && this._removeSuggestionsPopup()}
            _createKeyboardComponent () {const e = this.util,t = e.createDiv(['footer-mode-keyboard', 'flex'])
              this._textArea = this._createInputTextArea(), t.appendChild(this._textArea);const s = e.createDiv(['footer-actions', 'flex']),i = this._createSendMessageButton()
              if (this._sendButton = i, s.appendChild(i), this.settings.enableSpeech && (this._switchToVoiceModeButton = this._createVoiceSwitchButton(), s.appendChild(this._switchToVoiceModeButton)), this.settings.enableSpeech) {const e = this._createKeyboardSwitchButton()
                s.appendChild(e)}if (this.settings.enableAttachment) {const e = this._createShareComponent()
                s.appendChild(e)}return t.appendChild(s), t}
            _createShareComponent () {const e = this.util,t = e.createDiv(),s = je(this.util, {css: ['button-upload', 'flex'],customIcon: this.icons.shareMenu,defaultIcon: G,title: this.locale.upload})
              s.id = this._shareBtnID;const i = e.createElement('input', ['none'])
              i.type = 'file', i.tabIndex = -1, i.setAttribute('aria-hidden', 'true'), We(i, this.locale.upload), this._uploadFileInput = i, this._shareMenu = this._getShareMenu(s);const n = e.getMenuButton({button: s,menuId: this._shareMenu.id,menu: this._shareMenu})
              return Be(n, 'click', (e => {
                  this._removeSuggestionsPopup()})), this._shareButton = n, document.addEventListener('deviceready', (() => {
                  const e = globalThis ? globalThis.device : window ? window.device : void 0
                  'Android' === (null == e ? void 0 : e.platform) && this._uploadFileInput.removeAttribute('accept')}), !1), Be(i, 'click', (() => i.value = null)), Be(i, 'change', (e => {
                  const t = e.target
                  t.files && t.files.length && this._onUpload(t.files[0])})), t.appendChild(this._shareButton), t.appendChild(this._shareMenu), t.appendChild(i), t}
            _getShareMenu (e) {return this.util.getMenu({menuId: `${this.settings.name}-share-menu`,menuClassList: ['share-popup-list'],buttonId: this._shareBtnID,menuItems: this._getShareItems(),menuButton: e})}
            _getShareItems () {const e = this.util,t = this.icons,s = this.locale,i = this._uploadFileInput,n = `${this.cssPrefix}-share-`
              let o = this.settings.shareMenuItems
              const a = [],r = [Ne.AUDIO, Ne.FILE, Ne.LOCATION, Ne.VISUAL],c = new Set
              if ((null == o ? void 0 : o.length) && !o.every((e => 'string' == typeof e && r.indexOf(e.toLowerCase()) < 0)) || (o = r), o.forEach((e => {
                  'string' == typeof e && c.add(e.toLowerCase())})), c.has(Ne.VISUAL)) {const o = `${n}visual`,r = t.shareMenuVisual || me
                a.push(e.createListItem(o, s.shareVisual, 'visual', r, 'share-popup-item', (() => {
                  i.accept = `${He.IMAGE},${He.VIDEO}`, i.click()})))}if (c.has(Ne.AUDIO)) {const o = `${n}audio`,r = t.shareMenuAudio || pe
                a.push(e.createListItem(o, s.shareAudio, 'audio', r, 'share-popup-item', (() => {
                  i.accept = He.AUDIO, i.click()})))}if (c.has(Ne.FILE)) {const o = `${n}file`,r = t.shareMenuFile || ue
                a.push(e.createListItem(o, s.shareFile, 'file', r, 'share-popup-item', (() => {
                  i.accept = He.FILE, i.click()})))}if (c.has(Ne.LOCATION)) {const i = `${n}location`,o = t.shareMenuLocation || ge
                a.push(e.createListItem(i, s.shareLocation, 'location', o, 'share-popup-item', (() => this.onShareLocation())))}const l = t.shareMenuFile || ue
              return this.settings.shareMenuItems.filter((e => 'string' != typeof e && 'string' == typeof e.type)).forEach((t => {
                  const n = t.type.toLowerCase(),o = `share_${n.indexOf("*")>=0?"all":n.replace(/ /g,"_")}`,r = `${this.cssPrefix}-${o}`,c = s[o] || this.i18n.en[o]
                  let h = t.label
                  c ? h = c : this.i18n.en[o] = h;const d = t.icon || l,p = t.maxSize && t.maxSize >= 1 ? Math.min(t.maxSize * j, W) : W,u = n.indexOf('*') >= 0 ? He.ALL : n.split(' ').filter((e => He.ALL.indexOf(e) >= 0)).map((e => `.${e} `)).join(',')
                  a.push(e.createListItem(r, h, o, d, 'share-popup-item', (() => {
                    this.fileMaxSize = p, i.accept = u, i.click()})))})), a}
            _createInputTextArea () {const e = ['user-input']
              this.settings.enableSpeech && e.push('user-input-inline-send');const t = this.util.createElement('textarea', e)
              return function (e, t) {Ye(e, t), qe(e, t)}(t, this.locale.inputPlaceholder), t.rows = 1, t.onkeydown = this.onInputKeyDown.bind(this), t.onkeyup = this.onInputKeyUp.bind(this), t.oninput = () => {
                  const e = t.value
                  this.widget.speechFinalResult = this.widget.speechFinalResult || {speechId: '',text: ''}, this.widget.speechFinalResult.text = e, this._expand()}, Be(t, 'paste', (() => {
                  this.isFooterDisabled || setTimeout(this.updateSendButtonDisabledState.bind(this))})), this._handleInputChange(t), t}
            _handleInputChange (e) {const t = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')
              Object.defineProperty(e, 'value', {set: s => {
                t.set.call(e, s), this.updateSendButtonDisabledState(), this._expand()},get: t.get})}
            _createSendMessageButton () {const e = ['button-send']
              this.settings.enableSpeech && e.push('button-send-inline');const t = je(this.util, {css: e,customIcon: this.icons.send,defaultIcon: de,title: this.locale.send})
              return t.onclick = () => {
                  var e,t
                  this._isUserInputEmpty() || (this._previousInputValue = void 0, this._textArea.value = null === (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.value.trim()) || void 0 === t ? void 0 : t.replace('\n', ''), this.settings.enableAutocomplete && (this._invalidateSuggestions(), this._removeSuggestionsPopup()), this._onSend())}, t}
            _createVoiceSwitchButton () {const e = je(this.util, {css: ['button-switch-voice'],customIcon: this.icons.mic,defaultIcon: le,title: this.locale.speak})
              return e.onclick = () => {
                  this.onSpeechToggle(!0), this.recognitionRequested = !0}, e}
            _createVoiceComponent () {const e = this.util,t = e.createDiv(['footer-mode-voice', 'flex']),s = e.createDiv(['footer-visualizer-wrapper'])
              return this._visualizerCanvas = e.createElement('canvas'), this._visualizerCanvas.width = 244, this._visualizerCanvas.height = 32, s.appendChild(this._visualizerCanvas), t.appendChild(s), t}
            _createKeyboardSwitchButton () {const e = je(this.util, {css: ['button-switch-kbd'],customIcon: this.icons.keyboard,defaultIcon: oe,title: this.locale.inputPlaceholder})
              return e.onclick = () => {
                  this.recognitionRequested = !1, this.onSpeechToggle(!1)}, e}
            updateSendButtonDisabledState () {const e = this._sendButton
              if (e && e.nodeType) {const t = this.util,s = 'none',i = this._textArea
                i && i.value && i.value.trim().length && this.mode !== Ue.VOICE ? t.removeCSSClass(this._sendButton, s) : t.addCSSClass(e, s)}}
            _isUserInputEmpty () {return !this._textArea || 0 === this._textArea.value.trim().length}
            onInputKeyDown (e) {var t
              this.isDisabled() || e.isComposing || 229 === e.keyCode || e.code === n.d.Return && !e.shiftKey && (null === (t = this._textArea.value) || void 0 === t ? void 0 : t.trim().length) > 0 && (e.preventDefault(), this._sendButton.click())}
            onInputKeyUp (e) {var t
              if (this.isDisabled())return this._invalidateSuggestions(), void this._removeSuggestionsPopup();this.isTyping || (this.isTyping = !0, this.eventDispatcher.trigger(i.TYPING, this.isTyping)), clearTimeout(this.typingTimer), this.typingTimer = window.setTimeout((() => {
                this.isTyping = !1, this.eventDispatcher.trigger(i.TYPING, this.isTyping)}), 1e3);const s = null === (t = this._textArea.value) || void 0 === t ? void 0 : t.trim()
              if (this.updateSendButtonDisabledState(), !e.isComposing && this.settings.enableAutocomplete) {if (this._onNavigateSuggestion(e))return;e.code === n.d.Backspace && (this._previousInputValue = void 0, this._invalidateSuggestions(), this._removeSuggestionsPopup(), clearTimeout(this._suggestionsRequest)), this._getNavKeys().indexOf(e.code) < 0 && (s.length >= 3 ? this._previousInputValue !== this._textArea.value && (this._previousInputValue = this._textArea.value, clearTimeout(this._suggestionsRequest), this._setSuggestionsRequestTimer()) : (this._previousInputValue = void 0, this._removeSuggestionsPopup(), clearTimeout(this._suggestionsRequest)))}}
            _expand () {this._textArea.style.height = null;const e = .6 * this.widget.chatWidgetDiv.clientHeight,t = this._textArea.scrollHeight
              this._textArea.style.height = `${t<e?t:e}px`}
            _onNavigateSuggestion (e) {let t = !1
              const s = document.getElementById($e.SUGGESTIONS_ID)
              if (s) {const i = s.getElementsByTagName('div')
                e.code === n.d.Down ? (e.preventDefault(), this._currentSuggestionFocus < i.length - 1 ? (this._currentSuggestionFocus++, this._addActive(i)) : (this._removeActive(i), this._textArea.value = this._currentInputValue ? this._currentInputValue : this._textArea.value, this._currentSuggestionFocus = i.length), t = !0) : e.code === n.d.Up && (e.preventDefault(), this._currentSuggestionFocus === i.length && (this._currentInputValue = this._textArea.value), this._currentSuggestionFocus > 0 && this._currentSuggestionFocus--, this._addActive(i), t = !0)}return t}
            _addActive (e) {e && (this._removeActive(e), this.util.addCSSClass(e[this._currentSuggestionFocus], 'autocomplete-active'), e[this._currentSuggestionFocus].scrollIntoView(), this._textArea.value = e[this._currentSuggestionFocus].innerText)}
            _removeActive (e) {
              for (const t of e) this.util.removeCSSClass(t, 'autocomplete-active') }
            _removeSuggestionsPopup () {const e = document.getElementById($e.SUGGESTIONS_ID)
              e && e.remove()}
            _onSend () {this.onSend(this._textArea.value), this._textArea.value = '', this._textArea.innerText = '', setTimeout(this._expand.bind(this))}
            _onUpload (e) {const t = this.fileMaxSize
              this.fileMaxSize = W, this.onUpload(e, {maxSize: t}), this._uploadFileInput.value = ''}
            _onQueryChange () {this.onQueryChange(this._textArea.value.trim()).catch((() => {
              }))}
            _setSuggestionsRequestTimer () {this._suggestionsRequest = setTimeout((() => {
                this._onQueryChange()}), 300)}
            _invalidateSuggestions () {this._suggestions = null, this._isSuggestionsValid = !1}
            _getNavKeys () {if (!this._navKeys.length)
                for (const e of Object.keys(Fe)) this._navKeys.push(Fe[e]); return this._navKeys}
            _createSuggestionListItem (e, t) {const s = this.util,i = s.createDiv()
              i.setAttribute('role', 'listitem'), i.onclick = () => {
                this._textArea.value = i.innerText, this._removeSuggestionsPopup(), this._sendButton.click()};const n = new RegExp(t, 'i'),o = e.match(n)
              if (o) {if (0 !== o.index) {const t = s.createElement('span')
                  t.textContent = e.substr(0, o.index), i.appendChild(t)}const n = s.createElement('strong')
                if (n.textContent = e.substr(o.index, t.length), i.appendChild(n), o.index + t.length !== e.length) {const n = s.createElement('span')
                  n.textContent = e.substring(o.index + t.length), i.appendChild(n)}}else i.textContent = e;return i}
          }
          function je (e, {css:t, customIcon:s, defaultIcon:i, title:n}) {const o = s || i
            return e.createIconButton({css: ['footer-button', 'flex'].concat(t),icon: o,iconCss: [],title: n})}function We (e, t) {Ge(e, t), qe(e, t)}function Ge (e, t) {e.title = t}function Ye (e, t) {e.placeholder = t}function qe (e, t) {e.setAttribute('aria-label', t)}$e.SUGGESTIONS_ID = 'chat_widget_suggestions'
          class Ke extends Re {
            constructor (e, t, s, i, n, a, r) {super(), this.settings = e, this.util = t, this.onClose = s, this.onClearMessage = i, this.onAudioToggle = n, this.core = a, this.onEndConversation = r, this.logger = new o('ChatHeaderComponent'), this.headerActions = [], this.menuActions = [], this.cssPrefix = e.name, this.i18n = this.settings.i18n, this.element = this._createElement(), this.settings.showConnectionStatus && this.core.on(E.g.State, (e => this.updateStatusMessage(e))), this.disable(!0)}
            render () {}
            addLanguageSelect (e) {const t = !(!this.menuActions || !this.menuActions.length)
              this.multiLangControl = e.render(t), this.multiLangControl && (t ? this.actionsMenu.appendChild(this.multiLangControl) : this.actionsContainer.prepend(this.multiLangControl))}
            closeWidgetPopup () {this.onClose()}
            clearHistory () {this.onClearMessage()}
            showTTSButton (e) {const t = this.audioActionElem
              t && (t.style.display = e ? 'flex' : 'none')}
            disableTTSButton (e) {if (this.audioActionElem) {const t = this.util,s = this.audioActionElem
                if ('LI' === s.tagName) {const i = 'disable'
                  e ? t.addCSSClass(s, i) : t.removeCSSClass(s, i)}else this.audioActionElem.disabled = e}}
            setLocale (e) {const t = `${this.cssPrefix}-none`
              this.currentTranslations = e;const s = e.chatTitle
              s && (this.title.innerText = s, this.title.title = s, this.logo && (this.logo.title = s));const i = e.chatSubtitle
              function n (e, t) {if ('LI' === e.tagName) {const s = e.querySelector('svg') || e.querySelector('img')
                  'img' === s.localName ? s.alt = t : s.setAttribute('aria-label', t), e.querySelector('span').innerText = t}else e.title = t}i ? (this.subtitle.innerText = i, this.subtitle.title = i, this.subtitle.classList.remove(t), this.networkStatus.classList.add(t)) : this.settings.showConnectionStatus && (this.updateStatusMessage(this.chatStatus), this.networkStatus.classList.remove(t), this.subtitle.classList.add(t)), this.endActionElem && n(this.endActionElem, e.endConversation), this.closeActionElem && n(this.closeActionElem, e.close), this.clearActionElem && n(this.clearActionElem, e.clear), this.audioActionElem && n(this.audioActionElem, this._audioActionElemOn ? e.audioResponseOn : e.audioResponseOff), this.multiLangControl && n(this.multiLangControl, e.languageSelectDropdown)}
            disable (e = !0) {this.settings.enableEndConversation && (this.endActionElem.disabled = e)}
            _createElement () {var e
              const t = this.util,s = this.settings,i = s.icons,n = t.createDiv(['header', 'flex']),o = t.createDiv(['header-info-wrapper']),a = t.createDiv(['header-actions', 'flex']),r = s.locale,c = this.i18n[r],l = c.chatTitle,h = c.chatSubtitle
              if (!('logo' in i) || i.logo) {const e = t.createImageIcon({icon: i.logo || ce,iconCss: ['logo'],title: l})
                n.appendChild(e), this.logo = e}if (l) {const e = t.createDiv(['title'])
                e.id = `${s.name}-title`, e.innerText = l, e.title = l, o.appendChild(e), this.title = e}this.subtitle = t.createDiv(['subtitle']), o.appendChild(this.subtitle), this.networkStatus = t.createDiv(['connection-status', 'disconnected']), o.appendChild(this.networkStatus), h ? (this.subtitle.innerText = h, this.subtitle.title = h, s.showConnectionStatus = !1, this.networkStatus.classList.add(`${this.cssPrefix}-none`)) : s.showConnectionStatus && (this.networkStatus.innerText = c.disconnected, this.networkStatus.title = this.networkStatus.innerText, this.subtitle.classList.add(`${this.cssPrefix}-none`)), n.appendChild(o);const d = t.createDiv(['header-gap'])
              if (n.appendChild(d), s.customHeaderElementId) {const e = document.getElementById(s.customHeaderElementId)
                if (e) {const s = t.createDiv(['header-custom-element'])
                  s.appendChild(e), n.appendChild(s)}else this.logger.error(`Could not find element with ID '${s.customHeaderElementId}'. No custom element added to the chat header.`)}if (this.actionsContainer = a, s.enableEndConversation) {const e = i.close || X
                this.headerActions.push({name: 'end-conversation',title: c.endConversation,icon: e,clickHandler: this.onEndConversation.bind(this)})}if (!s.embedded) {const e = i.collapse || Q
                this.headerActions.push({name: 'collapse',title: c.close,icon: e,clickHandler: this.closeWidgetPopup.bind(this)})}if (s.enableBotAudioResponse && (this._audioActionElemOn = !s.initBotAudioMuted, this.headerActions.push({name: 'tts',title: this._audioActionElemOn ? c.audioResponseOn : c.audioResponseOff,icon: this._audioActionElemOn ? i.ttsOn || be : i.ttsOff || fe,clickHandler: () => {
                  this._audioActionElemOn = !this._audioActionElemOn, this.setAudioResponseIcon(c), this.onAudioToggle(this._audioActionElemOn)}})), s.enableClearMessage) {const e = i.clearHistory || Z
                this.headerActions.push({name: 'clear',title: c.clear,icon: e,clickHandler: this.clearHistory.bind(this)})}return null === (e = this.headerActions) || void 0 === e || e.forEach(((e, s) => {
                  const i = this.settings.multiLangChat ? this.headerActions.length + 1 : this.headerActions.length
                  if (!this.settings.enableHeaderActionCollapse || s < 2 && !(i > 2 && 1 === s)) {const s = t.createIconButton({css: ['header-button'],icon: e.icon,iconCss: [],title: e.title})
                    s.onclick = e.clickHandler, this.mapActionElems(e, s), this.actionsContainer.prepend(s)}else this.menuActions.push(e)})), this.menuActions && this.menuActions.length && this.createActionMenu(this.menuActions), n.appendChild(a), n}
            mapActionElems (e, t) {switch (t.id = `${this.cssPrefix}-${e.name}`, e.name) {case 'end-conversation':
                  this.endActionElem = t
                  break;case 'collapse':
                  this.closeActionElem = t
                  break;case 'tts':
                  this.audioActionElem = t
                  break;case 'clear':
                  this.clearActionElem = t}}
            createActionMenu (e) {const t = this.util,s = `${this.settings.name}-action-menu`,i = `${s}-button`,n = e.map((e => {
                  const s = t.createListItem(`action-menu-option-${e.name}`, e.title, e.name, e.icon, 'action-item', e.clickHandler)
                  return this.mapActionElems(e, s), s})),o = t.createIconButton({css: ['header-button', 'button-close'],icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path d="M4.99935 9.99967C4.99935 10.9201 4.25316 11.6663 3.33268 11.6663C2.41221 11.6663 1.66602 10.9201 1.66602 9.99967C1.66602 9.0792 2.41221 8.33301 3.33268 8.33301C4.25316 8.33301 4.99935 9.0792 4.99935 9.99967Z" fill="#161513"/><path d="M11.666 9.99967C11.666 10.9201 10.9198 11.6663 9.99935 11.6663C9.07887 11.6663 8.33268 10.9201 8.33268 9.99967C8.33268 9.0792 9.07887 8.33301 9.99935 8.33301C10.9198 8.33301 11.666 9.0792 11.666 9.99967Z" fill="#161513"/><path d="M18.3327 9.99967C18.3327 10.9201 17.5865 11.6663 16.666 11.6663C15.7455 11.6663 14.9993 10.9201 14.9993 9.99967C14.9993 9.0792 15.7455 8.33301 16.666 8.33301C17.5865 8.33301 18.3327 9.0792 18.3327 9.99967Z" fill="#161513"/></svg',iconCss: [],title: this.i18n[this.settings.locale].showOptions}),a = t.getMenu({menuId: s,menuClassList: ['action-menu'],menuItems: n,buttonId: i,menuButton: o}),r = t.getMenuButton({button: o,menuId: s,menu: a})
              this.actionsContainer.prepend(r), this.actionsContainer.appendChild(a), this.actionsMenu = a}
            setAudioResponseIcon (e) {const t = this.util,s = this.currentTranslations || e,i = this.settings.icons
              this.audioActionElem.innerHTML = '';const n = this._audioActionElemOn ? s.audioResponseOn : s.audioResponseOff,o = this._audioActionElemOn ? i.ttsOn || be : i.ttsOff || fe,a = 'LI' === this.audioActionElem.tagName,r = t.createImageIcon({icon: o,iconCss: [a ? 'icon' : '', 'action-item-icon'],title: n})
              if (a) {this.audioActionElem.appendChild(r);const e = t.createElement('span', ['text', 'action-item-text', 'ellipsis'])
                e.innerText = n, this.audioActionElem.appendChild(e)}else this.audioActionElem.appendChild(r), this.audioActionElem.title = n}
            updateStatusMessage (e) {const t = this.util,s = 'connecting',i = 'connected',n = 'disconnected',o = this.networkStatus
              this.chatStatus = e;const a = this.currentTranslations || this.i18n[this.settings.locale]
              switch (e) {case E.e.Open:
                  o.innerText = a.connected, t.removeCSSClass(o, s, n), t.addCSSClass(o, i)
                  break;case E.e.Closed:
                  o.innerText = a.disconnected, t.removeCSSClass(o, s, i), t.addCSSClass(o, n)
                  break;case E.e.Closing:
                  o.innerText = a.closing, t.removeCSSClass(o, i, n), t.addCSSClass(o, s)
                  break;case E.e.Connecting:
                  o.innerText = a.connecting, t.removeCSSClass(o, i, n), t.addCSSClass(o, s)}o.title = o.innerText}
          }
          class Je extends Re {
            constructor (e) {super(), this.element = e.createDiv(['conversation'])}
            render (e) {}
          }
          class Ze {
            constructor (e, t, s, i, n) {this.settings = e, this.util = t, this.side = i, this.hasActions = n, this._url = s.url, this._type = s.type;const o = s.url.split('/')
              this._title = decodeURI(s.title || o[o.length - 1])}
            static capitalize (e) {return e.charAt(0).toUpperCase() + e.slice(1)}
            createDownloadButton (e) {const t = this.util,s = this.settings,i = t.createElement('a'),n = t.createIconButton({css: ['attachment-control-icon', 'attachment-button', 'flex'],icon: s.icons.download || ee,iconCss: ['attachment-download-icon'],title: s.i18n[s.locale].download})
              return i.setAttribute('href', e), i.setAttribute('download', ''), i.setAttribute('target', '_blank'), i.appendChild(n), i}
            createAttachment (e, t) {const s = this.util,i = this.settings,n = s.createDiv(['attachment']),o = s.createDiv(['attachment-placeholder', 'flex']),a = s.createDiv(['attachment-icon']),r = s.createImageIcon({icon: e,title: ''})
              a.appendChild(r);const c = this._title,l = s.createDiv(['attachment-footer', 'flex', this.hasActions && 'with-actions']),h = s.createElement('label', ['attachment-title']),d = s.createDiv(['attachment-controls', 'flex'])
              if (h.innerText = c, h.setAttribute('title', c), l.appendChild(h), this._type === E.b.Image) {const e = s.createIconButton({css: ['attachment-control-icon', 'attachment-button', 'flex'],icon: i.icons.expandImage || xe,iconCss: ['attachment-expand-icon'],title: i.i18n[i.locale].imageViewerOpen})
                e.onclick = () => {
                  this.createImagePreview(this._url, c)}, d.appendChild(e)}if (this.side === A.LEFT && d.appendChild(this.createDownloadButton(this._url)), t)switch (o.appendChild(t), t.onerror = () => {
                  t.remove(), o.appendChild(a)}, this._type) {case E.b.Image:
                    t.onload = () => {
                      t.clientHeight > 211 && (o.style.alignItems = 'flex-start'), l.appendChild(d)}, t.onclick = () => {
                      this.createImagePreview(this._url, this._title)}
                    break;case E.b.Audio:
                  case E.b.Video:
                    t.onloadeddata = () => {
                      l.appendChild(d)}}else o.appendChild(a), l.appendChild(d);return n.appendChild(o), null == n || n.appendChild(l), n}
            createImagePreview (e, t) {const s = this.util,i = 'image-preview',n = this.settings,o = s.createDiv([`${i}-wrapper`]),a = s.createImage(e, [i]),r = s.createElement('label', [`${i}-title`])
              r.innerText = t;const c = document.querySelector(`.${this.settings.name}-wrapper`),l = n.icons.close || X,h = s.createIconButton({css: [`${i}-close`],icon: l,iconCss: [`${i}-close-icon`],title: n.i18n[n.locale].imageViewerClose})
              h.onclick = () => {
                o.remove()}, h.onkeydown = e => {
                'Tab' === e.code && (o.focus(), e.preventDefault())};const d = s.createDiv([`${i}-header`])
              d.appendChild(r), d.appendChild(h), o.appendChild(d), o.appendChild(a), o.setAttribute('tabindex', '-1'), o.onkeydown = e => {
                'Escape' === e.code && o.remove()}, c.appendChild(o), o.focus()}
          }
          class Xe extends Ze {
            render () {const e = this.util,t = this.settings,s = t.icons.fileAudio || Y,i = e.createMedia('video', ['attachment-audio'], this._url)
              i.controls = !0, i.preload = 'metadata', A.RIGHT === this.side && i.setAttribute('controlsList', 'nodownload');const n = `<a href="${this._url}">`,o = t.i18n[t.locale].attachmentAudioFallback.replace('{0}', n).replace('{/0}', '</a>')
              return i.innerHTML = o, t.linkHandler ? v(i, t.linkHandler) : t.openLinksInNewWindow && w(i), this.createAttachment(s, i)}
          }
          class Qe extends Ze {
            render () {const e = this.settings.icons.fileGeneric || ie
              return this.createAttachment(e)}
          }
          class et extends Ze {
            render () {const e = this.util,t = this.settings.icons.fileImage || ne,s = e.createImage(this._url, ['attachment-image'], this._title)
              return this.createAttachment(t, s)}
          }
          class tt extends Ze {
            render () {const e = this.util,t = this.settings,s = t.icons.fileVideo || ve
              if (u(this._url)) {const s = e.createElement('span')
                return s.innerHTML = e.linkify(this._url, {emHTML: !0,emVideo: t.embeddedVideo}), s}const i = e.createMedia('video', ['attachment-video'], this._url)
              i.controls = !0, i.preload = 'metadata', A.RIGHT === this.side && i.setAttribute('controlsList', 'nodownload');const n = `<a href="${this._url}">`,o = t.i18n[t.locale].attachmentVideoFallback.replace('{0}', n).replace('{/0}', '</a>')
              return i.innerHTML = o, this.settings.linkHandler ? v(i, t.linkHandler) : this.settings.openLinksInNewWindow && w(i), this.createAttachment(s, i)}
          }
          class st extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this._attachment = st.fromPayload(e, t, s.attachment, i, o, this.hasActions())}
            static fromPayload (e, t, s, i, n, o = !1) {if (n && n.authToken && n.uri && s.url.indexOf(n.uri) >= 0 && !this.tokenRegex.test(s.url)) {const e = null == n ? void 0 : n.authToken;(null == e ? void 0 : e.length) && (s.url = `${s.url}?token=${e}`)}switch (s.type) {case E.b.Image:
                  return new et(e, t, s, i, o);case E.b.Video:
                  return new tt(e, t, s, i, o);case E.b.Audio:
                  return new Xe(e, t, s, i, o);case E.b.File:
                  return new Qe(e, t, s, i, o);default:
                  throw Error('Payload contains wrong attachment type')}}
            getContent () {return super.getContent(this._attachment.render())}
          }
          st.tokenRegex = /token=[a-z\.\d]+/i
          class it {
            constructor (e, t, s, i, n) {var o
              if (this.settings = e, this.util = t, this.options = n, this._actions = [], this._postActions = [], this._title = s.title, this._description = s.description, this._imageUrl = s.imageUrl, this._url = s.url, s.actions) {
                for (const i of s.actions) {
                  const s = (this._title ? `${this._title} - ` : '') + (this._description ? `${this._description} - ` : '') + (null !== (o = this._url) && void 0 !== o ? o : ''),a = z.fromActionPayload(i, t, e.openLinksInNewWindow, s, e.linkHandler, n)
                  a && (a.onActionClick = this.handleOnActionClick.bind(this), this._actions.push(a)) }
                this._postActions = L(this._actions)}}
            handleOnActionClick (e) {this.onActionClick && this.onActionClick(e)}
            render () {const e = this.util,t = this.settings,s = t.locale,i = this._url,n = e.createDiv(['card']),o = i ? e.createAnchor(i, '', ['card-component'], t.openLinksInNewWindow, t.linkHandler) : e.createDiv(['card-content'])
              if (this._url && (o.innerText = ''), this._imageUrl) {const i = t.i18n
                let n = i[s].cardImagePlaceholder
                if (this.options && this.options.locale) {const e = i[this.options.locale]
                  n = e ? e.cardImagePlaceholder : n}o.appendChild(e.createImage(this._imageUrl, ['card-image'], n))}const a = {emHTML: !0,emVideo: !0},r = e.createDiv(['card-title'])
              if (r.innerHTML = e.linkify(this._title, a), o.appendChild(r), this._description) {const t = e.createDiv(['card-description'])
                t.innerHTML = e.linkify(this._description, a), o.appendChild(t)}if (n.appendChild(o), t.linkHandler ? v(o, t.linkHandler) : t.openLinksInNewWindow && w(o), this._actions.length > 0) {const s = e.createDiv('horizontal' !== t.cardActionsLayout ? ['card-actions', 'col'] : ['card-actions'])
                let i = !0
                for (const e of this._actions) {
                  const t = e.render()
                  i && (this.firstActionButton = t, i = !1), s.appendChild(t) }
                n.appendChild(s)}return n}
            hasActions () {return this._actions.length > 0}
            disableActions () {this._actions.forEach((e => e.disable()))}
            disablePostbacks () {this._postActions.forEach((e => e.disable()))}
            enableActions () {this._actions.forEach((e => e.enable()))}
            enablePostbacks () {this._postActions.forEach((e => e.enable()))}
            getFirstActionButton () {return this.firstActionButton}
          }
          class nt extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this.cards = [], this.layout = s.layout, this.numCards = s.cards.length;let a = 0
              s.cards.forEach((e => {
                a++, this.cards.push(new it(this.settings, t, e, a, o))})), this.globalActions = this.actions.concat(this.globalActions), this.actions = []}
            hasActions () {return this.cards[0].hasActions() || this.actions.length > 0 || this.globalActions.length > 0}
            disableActions () {super.disableActions(), this.cards.forEach((e => {
                e.disableActions()}))}
            disablePostbacks () {super.disablePostbacks(), this.cards.forEach((e => {
                e.disablePostbacks()}))}
            enableActions () {super.enableActions(), this.cards.forEach((e => {
                e.enableActions()}))}
            enablePostbacks () {super.enablePostbacks(), this.cards.forEach((e => {
                e.enablePostbacks()}))}
            render () {const e = this.util,t = this.settings.name,s = [`card-message-${this.layout}`],i = super.render()
              if (i.querySelector(`.${t}-icon-wrapper`)) {s.push('has-message-icon');const n = i.querySelector(`.${t}-content-wrapper`)
                e.addCSSClass(n, 'with-icon')}return e.addCSSClass(i, ...s), i}
            getContent () {const e = this.util,t = e.createDiv(['card-message-content']),s = e.createDiv(['card-message-cards'])
              let i = !0
              if (this.cards.forEach((e => {
                  e.onActionClick = this.handleOnActionClick.bind(this);const t = e.render()
                  i && e.hasActions() && (this.firstActionButton = e.getFirstActionButton(), i = !1), s.appendChild(t)})), t.appendChild(s), 'horizontal' === this.layout && this.numCards > 1) {let e
                t.appendChild(this.getNextButton()), this.activeCard = 0, s.addEventListener('scroll', (() => {
                  window.clearTimeout(e), e = window.setTimeout((() => {
                    let e = 0
                    for (let t = 0;t < this.numCards;t++) {const i = s.children[t]
                      if (s.scrollLeft <= i.offsetLeft + 5) {e = t;break}}e !== this.activeCard && (this.activeCard = e, this.updateCardsScrollState())}), 100)})), window.addEventListener('resize', k((() => {
                  this.showHideNavButtons()}), 500))}return this.content = t, this.cardsWrapper = s, setTimeout((() => {
                  this.showHideNavButtons()}), 0), t}
            getNextButton () {if (!this.nextButton) {const e = this.util,t = this.translations.cardNavNext
                this.nextButton = e.createDiv(['next-wrapper']);const s = e.createButton(['round', 'next'])
                s.title = t, s.setAttribute('aria-label', t);const i = e.createElementFromString(K)
                i.setAttribute('role', 'img'), i.setAttribute('aria-label', t), s.appendChild(i), s.onclick = this.showNextCard.bind(this), this.nextButton.appendChild(s)}return this.nextButton}
            getPreviousButton () {if (!this.prevButton) {const e = this.util,t = this.translations.cardNavPrevious
                this.prevButton = e.createDiv(['prev-wrapper']);const s = e.createButton(['round', 'previous'])
                s.title = t, s.setAttribute('aria-label', t);const i = e.createElementFromString(J)
                i.setAttribute('role', 'img'), i.setAttribute('aria-label', t), s.appendChild(i), s.onclick = this.showPrevCard.bind(this), this.prevButton.appendChild(s)}return this.prevButton}
            showNextCard () {this.activeCard < this.numCards && (this.activeCard++, this.updateCardsScrollState())}
            showPrevCard () {this.activeCard > 0 && (this.activeCard--, this.updateCardsScrollState())}
            updateCardsScrollState () {var e,t,s,i
              const n = this.cardsWrapper.children[this.activeCard]
              n && (this.cardsWrapper.scrollLeft = n.offsetLeft - 56, 0 === this.activeCard ? null === (e = this.prevButton) || void 0 === e || e.remove() : (null === (t = this.prevButton) || void 0 === t ? void 0 : t.parentElement) || this.content.prepend(this.getPreviousButton()), this.activeCard === this.numCards - 1 ? null === (s = this.nextButton) || void 0 === s || s.remove() : (null === (i = this.nextButton) || void 0 === i ? void 0 : i.parentElement) || this.content.appendChild(this.getNextButton()))}
            showHideNavButtons () {
              this.cardsWrapper.scrollWidth === this.cardsWrapper.offsetWidth ? (this.nextButton && (this.nextButton.hidden = !0), this.prevButton && (this.prevButton.hidden = !0)) : (this.nextButton && (this.nextButton.hidden = !1), this.prevButton && (this.prevButton.hidden = !1))}
          }
          class ot extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o);const a = s.location
              this._title = a.title, this._url = a.url, this._longitude = a.longitude, this._latitude = a.latitude}
            render () {const e = this.util,t = e.createDiv(['message'])
              t.lang = this.locale;const s = e.createDiv(['message-wrapper'])
              t.appendChild(s);const i = e.createDiv(['attachment']),n = e.createDiv(['attachment-placeholder', 'flex']),o = e.createDiv(['attachment-icon']),a = e.createImageIcon({icon: this.settings.icons.shareMenuLocation || ge,title: ''}),r = e.createDiv(['attachment-footer', 'flex']),c = e.createElement('label', ['attachment-title'])
              if (c.innerText = this._title ? this._title : `${this._latitude.toFixed(4)}, ${this._longitude.toFixed(4)}`, r.appendChild(c), o.appendChild(a), n.appendChild(o), !this.actions.length) {const t = e.createDiv(['attachment-controls']),s = e.createIconButton({css: ['attachment-control-icon', 'attachment-button', 'flex'],icon: this.settings.icons.externalLink || se,iconCss: [],title: this.translations.openMap}),i = e.createAnchor(this._url || `https://www.google.com/maps/@${this._latitude},${this._longitude},12z`, '', [], this.settings.openLinksInNewWindow, this.settings.linkHandler)
                s.onclick = () => {
                  i.click()}, t.appendChild(s), r.appendChild(t)}return i.appendChild(n), i.appendChild(r), s.appendChild(this.getContent(i)), t}
          }
          class at extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this._payload = JSON.stringify(s.payload)}
            getContent () {const e = this.util.createElement('span')
              return e.innerText = this._payload, super.getContent(e)}
          }
          class rt extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this._text = s.text}
            getContent () {const e = this.settings,t = this.util,s = t.createDiv()
              return s.innerHTML = t.linkify(this._text, {emHTML: this.side === A.LEFT,emVideo: !0}), e.linkHandler ? v(s, e.linkHandler) : e.openLinksInNewWindow && w(s), super.getContent(s)}
          }
          class ct extends rt {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this.currentRating = 0, this.payloadActions = s.actions, this.ratingId = Date.now()}
            focusFirstAction () {this.ratingActions[0].focus()}
            disableActions () {this.setDisabled(!0), super.disableActions()}
            disablePostbacks () {this.setDisabled(!0), super.disablePostbacks()}
            enableActions () {this.setDisabled(!1), super.enableActions()}
            enablePostbacks () {this.setDisabled(!1), super.enablePostbacks()}
            highlightRating (e) {const t = this.util,s = 'active'
              for (let i = 0;i < this.actions.length;i++) {const n = i + 1
                'string' == typeof e && (e = this.getValidRating(e)), e && n <= e || 0 === e && n <= this.currentRating ? t.addCSSClass(this.ratingActions[i], s) : t.removeCSSClass(this.ratingActions[i], s)}}
            getActions () {const e = this.util,t = this.settings,s = t.i18n[t.locale].ratingStar,i = e.createDiv(['rating-wrapper'])
              this.ratingActions = this.payloadActions.map((n => {
                const o = e.createElement('input', ['star-input', 'rating-hidden'])
                o.id = `rating-${n.label}-${this.ratingId}`, o.type = 'radio', o.name = `rating-${this.ratingId}`, o.value = n.label;const a = e.createElement('label', ['star-label'])
                a.htmlFor = `rating-${n.label}-${this.ratingId}`, a.setAttribute('data-rating', n.label);const r = e.createElement('span', ['rating-hidden']),c = s.replace('{0}', `${n.label}`)
                r.innerText = c;const l = t.icons && t.icons.rating || he,h = e.createImageIcon({icon: l,title: c,iconCss: ['rating-star-icon']})
                return a.appendChild(r), a.appendChild(h), o.onfocus = () => {
                    o.disabled || (this.currentRating = this.getRatingStarsAndHighlight(o))}, o.onkeydown = e => {
                    'Enter' === e.key && this.submitRating(n)}, a.onclick = () => {
                    o.disabled || (this.currentRating = this.getRatingStarsAndHighlight(a), this.submitRating(n))}, a.onmouseover = () => {
                    o.disabled || this.getRatingStarsAndHighlight(a)}, a.onmouseleave = () => {
                    o.disabled || this.getRatingStarsAndHighlight(null)}, i.appendChild(o), i.appendChild(a), o})), this.currentRating && this.getRatingStarsAndHighlight(null);const n = e.createDiv(['rating-root'])
              return n.appendChild(i), n}
            setDisabled (e) {this.ratingActions && this.ratingActions.forEach((t => {
                t.disabled = e}))}
            submitRating (e) {const t = {getPayload: () => Promise.resolve(e.postback),label: e.label,type: e.type}
              this.handleOnActionClick(t)}
            getRatingStarsAndHighlight (e) {let t = 0
              if (e) {const s = e.value ? e.value : null == e ? void 0 : e.getAttribute('data-rating')
                t = s ? parseInt(s, 10) : 0}return this.highlightRating(t), t}
            getValidRating (e) {let t = 0
              if (e.match(/^\d+$/)) {const s = parseInt(e, 10)
                s > 0 && s <= this.actions.length && (t = s)}return t}
          }
          class lt extends V {
            constructor (e, t, s, i, n, o) {super(e, t, s, i, n, o), this._actions = [], this.cssPrefix = e.name, this._options = o, this._payload = s, this._isActionsExternal = !0}
            disableActions () {super.disableActions(), this._actions.forEach((e => e.disable()))}
            disablePostbacks () {super.disablePostbacks(), L(this._actions).forEach((e => e.disable()))}
            enableActions () {super.enableActions(), this._actions.forEach((e => e.enable()))}
            enablePostbacks () {super.enablePostbacks(), L(this._actions).forEach((e => e.enable()))}
            render () {return super.render()}
            getHeader () {const e = this.util,t = super.getHeader()
              return e.addCSSClass(t, 'message-header-yellow'), t}
            getContent (e) {const t = 'message-bubble',s = this.util.createDiv([t, `${t}-tabular-message`])
              e && s.appendChild(e);const i = this.getPageStatus()
              return i && s.appendChild(i), s}
            getPageStatus () {const e = this.util
              let t
              const s = this._payload.paginationInfo
              return s && s.totalCount > s.rangeSize && (t = e.createDiv(['results-page-status']), t.innerText = s.status), t}
          }
          class ht extends lt {
            getContent () {const e = this.util,t = this._payload,s = 'form-message',i = e.createDiv([s])
              t.formColumns > 2 && (t.formColumns = 2);const n = t.forms
              return n.forEach(((s, o) => {
                  if (s.title) {const t = e.createDiv(['form-message-header'])
                    t.innerText = s.title, i.appendChild(t)}const [a, r] = dt(e, s, t.formColumns, this.settings, this.handleOnActionClick.bind(this), this._options)
                  this._actions = this._actions.concat(r);const c = o + 1
                  c === n.length || n[c].title || e.addCSSClass(a, 'with-border'), i.appendChild(a)})), super.getContent(i)}
          }
          function dt (e, t, s, i, n, o) {const a = 'form-message-field',r = [a, `form-message-field-col-${s}`],c = e.createDiv(['form-message-item'])
            t.fields.forEach((t => {
              const s = e.createDiv(r),n = e.createDiv(['form-message-key']),o = e.createDiv(['form-message-value'])
              if (n.innerText = t.label, 'link' === t.displayType) {const s = e.createDiv(),n = e.createElement('a', t.linkLabel ? [] : ['ellipsis'])
                n.href = t.value, n.innerText = t.linkLabel || C(t.value) || '', n.setAttribute('target', '_blank'), s.appendChild(n), i.linkHandler ? v(s, i.linkHandler) : i.openLinksInNewWindow && w(s), o.appendChild(n)}else o.innerText = t.value || '';const a = t.alignment
              a && (n.style.textAlign = a, o.style.textAlign = a), s.appendChild(n), s.appendChild(o), c.appendChild(s)}));const l = function (e, t, s, i, n) {var o
              const a = []
              if ((null === (o = e.actions) || void 0 === o ? void 0 : o.length) > 0) {let o = e.title ? `${e.title} - ` : ''
                e.fields.forEach((e => {
                  o += e.value ? `${e.value} - ` : ''})), o.length && (o = o.slice(0, o.length - 3))
                for (const r of e.actions) {
                  const e = z.fromActionPayload(r, t, s.openLinksInNewWindow, o, s.linkHandler, n)
                  e && (e.onActionClick = i.bind(this), a.push(e)) }
              }return a}(t, e, i, n, o)
            return c.appendChild(function (e, t, s, i) {const n = t.createDiv('horizontal' !== s.formActionsLayout ? ['form-actions', 'col', i] : ['form-actions'])
                for (const t of e) {
                  const e = t.render()
                  n.appendChild(e) }
                return n}(l, e, i, 'form-message-actions-col')), [c, l]}const pt = 100
          class ut extends lt {
            getContent () {const e = this.util,t = this._payload,s = mt(t.headings),i = 'table-message',n = e.createDiv(['table-message-wrapper']),o = e.createElement('table', [i])
              n.appendChild(o);const a = e.createElement('tr', ['table-message-headings'])
              return s.forEach((t => {
                  const s = gt(e, ['table-message-heading'], t.width, t.alignment)
                  s.innerText = t.label, a.appendChild(s)})), o.appendChild(a), t.rows.forEach((t => {
                  const i = e.createElement('tr', ['table-message-row'])
                  t.fields.forEach(((t, n) => {
                    const o = gt(e, ['table-message-item'], s[n].width, t.alignment)
                    if ('link' === t.displayType) {const s = e.createDiv(),i = e.createElement('a', t.linkLabel ? [] : ['ellipsis'])
                      i.href = t.value, i.innerText = t.linkLabel || C(t.value) || '', i.setAttribute('target', '_blank'), s.appendChild(i), this.settings.linkHandler ? v(s, this.settings.linkHandler) : this.settings.openLinksInNewWindow && w(s), o.appendChild(i)}else o.innerText = t.value || '';i.appendChild(o)})), o.appendChild(i)})), super.getContent(n)}
          }
          function gt (e, t, s, i) {const n = e.createElement('td', t)
            return n.style.textAlign = i, n.style.width = `${s}%`, n}function mt (e) {let t
            if (e.every((e => !e.width || e.width >= 0 && e.width <= pt))) {let s = 0,i = 0
              if (e.forEach((e => {
                  e.width ? i += e.width : s++})), s)if (i < pt) {const n = (pt - i) / s
                  t = e.map((e => (e.width || (e.width = n), e)))}else t = ft(e)
              else if (i === pt)t = e
              else {const s = pt / i
                t = e.map((e => (e.width = e.width * s, e)))}}else t = ft(e);return t}function ft (e) {const t = pt / e.length
            return e.map((e => (e.width = t, e)))}
          class bt extends lt {
            getContent () {const e = this.util,t = this._payload
              t.headings.push({alignment: 'center',label: ''});const s = mt(t.headings),i = 'table-message',n = e.createDiv(['table-message-wrapper']),o = e.createElement('table', [i, 'tableform-message'])
              n.appendChild(o);const a = e.createElement('tr', ['table-message-headings'])
              return s.forEach((t => {
                  const s = gt(e, ['table-message-heading'], t.width, t.alignment)
                  s.innerText = t.label, a.appendChild(s)})), o.appendChild(a), a.lastElementChild.style.width = '32px', t.rows.forEach(((i, n) => {
                  const a = e.createElement('tr', ['table-message-row'])
                  i.fields.forEach(((t, i) => {
                    const n = gt(e, ['table-message-item'], s[i].width, t.alignment)
                    if ('link' === t.displayType) {const s = e.createElement('a', t.linkLabel ? [] : ['ellipsis'])
                      s.href = t.value, s.innerText = t.linkLabel || C(t.value) || '', n.appendChild(s)}else n.innerText = t.value || '';a.appendChild(n)})), t.formColumns > 2 && (t.formColumns = 2);const r = t.forms[n],c = gt(e, ['table-message-item', 'button-cell']),l = e.createIconButton({css: ['table-message-item', 'table-message-item-form-toggle'],icon: q,iconCss: [],title: r.title || ''})
                  c.appendChild(l), a.appendChild(c);const h = 'none',d = 'rotate-180', [p, u] = dt(e, r, t.formColumns, this.settings, this.handleOnActionClick.bind(this), this._options)
                  this._actions = this._actions.concat(u), e.addCSSClass(p, h);let g = !1
                  a.onclick = () => {
                    g ? (e.addCSSClass(p, h), e.removeCSSClass(l, d)) : (e.removeCSSClass(p, h), e.addCSSClass(l, d)), g = !g}, o.appendChild(a), o.appendChild(p)})), super.getContent(n)}
          }
          function vt (e) {return !!e.source}function wt (e) {if (e.msgId)return e.msgId;const t = e.messagePayload
            let s = t.type
            switch (t.type) {case E.h.Text:
                s = `${s}${t.text.substring(0,10)}`
                break;case E.h.Card:
                s = `${s}${t.cards[0].title.substring(0,10)}`
                break;case E.h.Attachment:
                s = `${s}${t.attachment.url.substring(0,20)}`
                break;case E.h.Location:
                const e = t.location
                s = `${s}${e.latitude}${e.latitude}`}return s}
          class xt {
            static fromMessage (e, t, s, i) {let n,o
              vt(s) ? (n = A.LEFT, o = s.source || E.k.Bot) : (n = A.RIGHT, s.messagePayload.type === E.h.Postback && (s = (0, E.n)({text: s.messagePayload.text,type: E.h.Text})));const a = s.messagePayload
              switch (a.type) {case E.h.Text:
                  return a.channelExtensions && 'stars' === a.channelExtensions.displayType ? new ct(e, t, a, n, o, i) : new rt(e, t, a, n, o, i);case E.h.Attachment:
                  return new st(e, t, a, n, o, i);case E.h.Card:
                  return new nt(e, t, a, n, o, i);case E.h.Location:
                  return new ot(e, t, a, n, o, i);case E.h.Table:
                  return new ut(e, t, a, n, o, i);case E.h.Form:
                  return new ht(e, t, a, n, o, i);case E.h.TableForm:
                  return new bt(e, t, a, n, o, i);case E.h.Raw:
                  return new at(e, t, a, n, o, i);default:
                  throw Error(`Wrong message payload type:${a.type}`)}}
          }
          class Ct {
            constructor (e) {this.util = e}
            render () {const e = this.util.createDiv(['spinner'])
              return e.innerHTML = '<svg viewBox="0 0 64 64"><circle transform="translate(32,32)" r="26"></circle></svg>', e}
          }
          class St {
            constructor (e, t, s, i) {this.text = e, this.side = t, this.settings = s, this.util = i}
            render () {const e = this.util,t = this.settings.icons,s = e.createDiv(['attachment']),i = this.side === A.LEFT ? t.avatarBot : t.avatarUser,n = e.createDiv(['attachment-footer', 'flex']),o = e.createDiv(['attachment-title'])
              o.innerText = this.text, n.appendChild(o);const a = e.createDiv(['attachment-placeholder', 'flex'])
              return a.appendChild(new Ct(e).render()), s.appendChild(a), s.appendChild(n), this._element = e.getMessageBlock(this.side, s, i), this._element}
            remove () {this._element.remove()}
          }
          class yt {
            constructor (e, t, s, i, n, o = !0) {this.title = e, this.text = t, this.side = s, this.settings = i, this.util = n, this.isError = o}
            render (e) {const t = this.util,s = this.settings.icons,i = t.createDiv(['message-content']),n = this.side === A.LEFT ? s.avatarBot : s.avatarUser
              if (e) {t.addCSSClass(i, 'message-with-icon');const s = t.createImageIcon({icon: e,title: ''}),n = t.createDiv(['message-icon'])
                n.appendChild(s), i.appendChild(n)}const o = t.createDiv(['message-text']),a = t.createDiv(['message-title']),r = t.createDiv(['message-description'])
              return a.innerText = this.title, r.innerText = this.text, o.appendChild(a), o.appendChild(r), i.appendChild(o), t.getMessageBlock(this.side, i, n, this.isError)}
          }
          class _t {
            constructor (e, t, s) {this.side = e, this.settings = t, this.util = s, this.element = this.render(), this.visible = !1}
            append (e) {this.isVisible() || (e.appendChild(this.element), this.visible = !0, this.timeoutID && clearTimeout(this.timeoutID), this.timeoutID = window.setTimeout((() => {
                this.remove()}), 1e3 * this.settings.typingIndicatorTimeout))}
            remove () {this.isVisible() && (this.element.remove(), this.visible = !1)}
            isVisible () {return this.visible}
            render () {const e = this.util,t = this.settings,s = e.createDiv(['typing-cue-wrapper']),i = t.icons.avatarBot
              if (t.icons.typingIndicator) {const i = t.icons.typingIndicator,n = t.i18n[t.locale].typingIndicator,o = e.createImageIcon({icon: i,title: n})
                o.style.height = t.chatBubbleIconHeight || o.style.height, o.style.width = t.chatBubbleIconWidth || o.style.width, s.appendChild(o)}else {const t = e.createDiv(['typing-cue'])
                s.appendChild(t)}return e.getMessageBlock(this.side, s, i)}
            updateTypingCueIcon (e) {const t = this.element.querySelector('svg') || this.element.querySelector('img')
              t && ('img' === t.localName ? t.alt = e : t.setAttribute('aria-label', e))}
            setAgentTypingCue (e) {e.style.marginTop = '0px', this.element.firstChild.replaceWith(e)}
          }
          const Tt = ['no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', 'unsafe-url'],kt = ['allow-downloads-without-user-activation', 'allow-downloads', 'allow-forms', 'allow-modals', 'allow-orientation-lock', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-presentation', 'allow-same-origin', 'allow-scripts', 'allow-storage-access-by-user-activation', 'allow-top-navigation', 'allow-top-navigation-by-user-activation'],It = 'none',At = 'webview-container-open',Et = 'webview-container-close'
          class Lt {
            constructor (e, t, s) {this.util = t, this.settings = s, this.heightRatio = .8, this.props = {closeButtonIcon: X,closeButtonType: 'icon',errorInfoBar: !0,referrerPolicy: 'no-referrer-when-downgrade',sandbox: [],size: 'tall'}, this.isOpen = !1, this.isErrorViewOpen = !1, this.setProps(e || {}), this.cssPrefix = s.name}
            setProps (e) {Array.isArray(e.sandbox) && e.sandbox.length && (e.sandbox = e.sandbox.map((e => e.toLowerCase())).filter((e => kt.indexOf(e) >= 0)));const t = Object.assign(Object.assign({}, this.props), e)
              var s
              t.closeButtonIcon || (t.closeButtonIcon = this.props.closeButtonIcon), t.closeButtonType || (t.closeButtonType = 'icon'), t.size || (t.size = 'tall'), s = t.referrerPolicy, Tt.indexOf(null == s ? void 0 : s.toLowerCase()) >= 0 || (t.referrerPolicy = 'no-referrer-when-downgrade'), 'full' === t.size && (this.heightRatio = 1), this.props = t, this.isOpen = !1, this.isErrorViewOpen = !1}
            open (e) {if (this.component) {const t = this.util,s = 100
                this.component.style.height = s * this.heightRatio + '%', t.removeCSSClass(this.component, Et, It), t.addCSSClass(this.component, At), this.component.insertBefore(this.loadingIndicator, this.webView), this.webView.onload = () => {
                  this.loadingIndicator.remove(), t.removeCSSClass(this.webView, It)}, this.props.title || (this.title.textContent = e), this.props.errorInfoBar && setTimeout((() => {
                  this.isOpen && !this.isErrorViewOpen && (this.errorView = this.createErrorView(), e && (this.errorAltLink.href = e), t.removeCSSClass(this.errorView, It), this.component.appendChild(this.errorView), this.isErrorViewOpen = !0)}), 1e3), this.isOpen = !0}}
            close () {const e = this.util
              this.isOpen = !1, e.removeCSSClass(this.component, At), e.addCSSClass(this.component, Et), this.removeErrorView(), this.webView.setAttribute('src', ''), setTimeout((() => {
                e.addCSSClass(this.component, It), e.removeCSSClass(this.webView, It)}), 400)}
            render () {const e = this.util,t = this.props
              return this.component = e.createDiv(['webview-container']), this.header = e.createDiv(['header', 'webview-header', 'flex']), this.title = e.createDiv(['title', 'webview-title', 'ellipsis']), this.closeButton = e.createIconButton({css: ['header-button', 'webview-button-close'],icon: t.closeButtonIcon,iconCss: [],title: t.closeButtonLabel}), this.closeButton.id = `${this.cssPrefix}-webview-button-close`, this.loadingIndicator = this.createLoadingIndicator(), this.webView = e.createElement('iframe', ['webview']), this.webView.name = `${this.settings.name}-webview`, this.webView.title = t.accessibilityTitle, t.title && (this.title.textContent = t.title), 'label' === t.closeButtonType ? (this.closeButton.classList.add(`${this.cssPrefix}-label-only`), this.closeButton.appendChild(document.createTextNode(t.closeButtonLabel))) : 'iconWithLabel' === t.closeButtonType && (this.closeButton.classList.add(`${this.cssPrefix}-with-label`), this.closeButton.appendChild(document.createTextNode(t.closeButtonLabel))), this.webView.setAttribute('referrerpolicy', t.referrerPolicy), this.props.sandbox.length && this.props.sandbox.forEach((e => {
                  this.webView.sandbox.add(e)})), this.closeButton.title = t.closeButtonLabel, e.addCSSClass(this.component, It), this.closeButton.onclick = () => {
                  this.close()}, this.header.appendChild(this.title), this.header.appendChild(this.closeButton), this.component.appendChild(this.header), this.component.appendChild(this.webView), this.component}
            createLoadingIndicator () {return new Ct(this.util).render()}
            createErrorView () {const e = this.util,t = e.createDiv(['webview-error', 'flex'])
              this.errorInfoText = e.createDiv(['webview-error-text']), t.appendChild(this.errorInfoText), this.setErrorTextWithLink(this.props.errorInfoText);const s = e.createIconButton({css: ['webview-error-button-close'],icon: this.props.closeButtonIcon,iconCss: [],title: this.props.errorInfoDismissLabel})
              return s.onclick = this.removeErrorView.bind(this), t.appendChild(s), t}
            setErrorTextWithLink (e) {var t
              const s = this.util,i = b(e)
              let n
              const o = /\{0\}(.*)\{\/0\}/g,a = null === (t = o.exec(i)) || void 0 === t ? void 0 : t[1]
              if (a) {const e = s.createAnchor('', a, ['webview-alt-link'])
                n = i.replace(m(o), e.outerHTML)}else n = s.createAnchor('', i, ['webview-alt-link']).outerHTML;this.errorInfoText.innerHTML = n, this.errorAltLink = this.errorInfoText.querySelector('a')}
            removeErrorView () {const e = this.util
              this.isErrorViewOpen && (e.addCSSClass(this.errorView, It), setTimeout((() => {
                this.component.removeChild(this.errorView), this.isErrorViewOpen = !1}), 600))}
          }
          const Mt = window.setTimeout,Pt = window.setInterval,Dt = 36e5,Ot = 864e5,Bt = 'relTimeNow',Rt = 'relTimeMoment',zt = 'relTimeMin',Vt = 'relTimeHr'
          class Nt {
            constructor (e, t) {this.util = t, this.i18n = e.i18n[e.locale];const s = e.icons,i = e.name
              this.cssPrefix = i, this.cssSkill = `${i}-left ${s.avatarBot?`${i}-has-message-icon`:""}`, this.cssUser = `${i}-right ${s.avatarUser?`${i}-has-message-icon`:""}`}
            render () {const e = this.util
              let t = this.element
              return t ? (t.setAttribute('aria-live', 'off'), t.setAttribute('aria-hidden', 'true')) : t = e.createDiv(), t.className = `${this.cssPrefix}-relative-timestamp ${this.css}`, this.element = t, t}
            setLocale (e) {if (this.i18n = e, this.key)switch (this.key) {case Bt:
                  case Rt:
                    this.setTime(this.i18n[this.key])
                    break;case zt:
                  case Vt:
                    this.setTime(this.i18n[this.key].replace('{0}', `${this.counter}`))}}
            setRelativeTime (e) {const t = (new Date).getTime() - e.getTime(),s = Math.floor(t / 1e3),i = Math.floor(s / 60),n = Math.floor(i / 60),o = Math.floor(n / 24),a = Math.floor(o / 30),r = Math.floor(a / 12)
              r > 0 ? this.setYears(r) : a > 0 ? this.setMonths(a) : o > 0 ? this.setDays(o) : n > 0 ? this.setHours(n) : i > 0 ? this.setMinutes(i) : this.setMoment(s)}
            refresh (e) {this.css = e === E.j.Skill ? this.cssSkill : this.cssUser, this.element.className = `${this.cssPrefix}-relative-timestamp ${this.css}`, this.setNow()}
            remove () {var e;(null === (e = this.element) || void 0 === e ? void 0 : e.parentElement) && this.element.remove()}
            setNow () {this.runTimeout(Bt, 1e4, this.setMoment.bind(this))}
            setMoment (e = 10) {e *= 1e3, this.runTimeout(Rt, 6e4 - e, this.setMinutes.bind(this))}
            setMinutes (e = 1) {this.runTimer(this.i18n, zt, 6e4, 60, this.setHours.bind(this), e)}
            setHours (e = 1) {this.runTimer(this.i18n, Vt, Dt, 24, this.setDays.bind(this), e)}
            setDays (e = 1) {this.runTimer(this.i18n, 'relTimeDay', Ot, 30, this.setMonths.bind(this), e)}
            setMonths (e = 1) {this.runTimer(this.i18n, 'relTimeMon', 2592e6, 12, this.setYears.bind(this), e)}
            setYears (e = 1) {this.runTimer(this.i18n, 'relTimeYr', 31536e6, 60, (() => {
              }), e)}
            runTimeout (e, t, s) {this.resetTimer(), this.setTime(this.i18n[e]), this.key = e, this.updateTimer = Mt((() => {
                s()}), t)}
            runTimer (e, t, s, i, n, o = 1) {this.resetTimer(), this.setTime(e[t].replace('{0}', `${o}`)), this.key = t, this.counter = o, this.updateTimer = Pt((() => {
                o++, this.counter = o, o > i ? (clearInterval(this.updateTimer), n()) : this.setTime(e[t].replace('{0}', `${o}`))}), s)}
            setTime (e) {this.element.innerText = e}
            resetTimer () {clearTimeout(this.updateTimer), clearInterval(this.updateTimer)}
          }
          class Ft {
            constructor (e, t) {let s,i
              if (this.config = t, this.isTTSEnabled = !0, this.isVoiceEnabled = !0, this.renderAsListItem = !1, this.recognitionLocaleMap = {}, this.synthesisLocaleVoiceMap = {}, this.supportedLangList = [], this.core = t.webCore, this.settings = t.settings, this.localizedText = this.settings.i18n[this.settings.locale], this.cssPrefix = t.settings.name, e && (this.langOptions = Object.assign(Object.assign({}, e), {supportedLangs: e.supportedLangs ? [...e.supportedLangs] : []}), s = this.langOptions.supportedLangs, i = this.langOptions.primary, 'string' == typeof i && (this.langOptions.primary = i.toLowerCase())), s && s.length)if (s.forEach((e => {
                    e.lang = e.lang.toLowerCase()})), s.length > 1 ? (s.unshift({lang: 'und',label: this.localizedText.language_detect}), this.langOptions.primary || (this.langOptions.primary = null)) : this.langOptions.primary = s[0].lang, this.supportedLangList = s.map((e => e.lang)), this.settings.enableBotAudioResponse) {const e = t.synthesisVoices
                  if (e && e.length) {const t = {}
                    s.forEach((s => {
                      const i = e.find((e => e.lang.indexOf(s.lang) >= 0))
                      i && (t[s.lang] = i)})), this.synthesisLocaleVoiceMap = t}}else this.updateSynthesis = () => {
                  };if (this.settings.enableSpeech) {const e = {}
                h(E.i).forEach((t => {
                  e[t.substring(0, 2)] = t, e[t] = t})), Ht(E.i.EN_GB, e), Ht(E.i.EN_AU, e), Ht(E.i.EN_IN, e), this.recognitionLocaleMap = e}else this.updateRecognition = () => {
              }}
            render (e) {const t = this.config.util,s = this.cssPrefix,i = 'language-selection',n = `${s}-${i}-button`,o = `${s}-${i}-menu`,a = this.langOptions
              let r
              if (this.renderAsListItem = e, !(a && a.supportedLangs && a.supportedLangs.length >= 2))return null;if (!this.component) {const s = this.settings.icons.language || ae
                let c
                const l = a.supportedLangs.map((e => {
                    const s = e.label,n = e.lang
                    return t.createListItem(`${i}-option-${n}`, s, n, '', `${i}-option`, (e => {
                      let t = e.target
                      'LI' !== t.tagName && (t = t.parentElement);const s = t.dataset.value
                      this.selectLanguage(s)}))})),h = t.getMenu({menuId: o,menuClassList: [`${i}-menu`],menuItems: l,buttonId: n,menuButton: c})
                if (e) {const e = t.createListItem('action-menu-option-lang', this.localizedText.languageSelectDropdown, 'lang', s, 'action-item', null, !0)
                  r = t.getMenuButton({button: e,menuId: o,menu: h});const i = t.createDiv(['arrow-icon']),n = t.createImageIcon({icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 9L11.9746 15L18 9H6Z" fill="#161513"/></svg>',title: ''})
                  i.appendChild(n), r.appendChild(i), this.config.chatWidget.chatWidgetDiv.appendChild(h)}else {r = t.createDiv(), c = t.createIconButton({css: ['header-button', 'button-lang'],icon: s,iconCss: [],title: this.localizedText.languageSelectDropdown});const e = t.getMenuButton({button: c,menuId: o,menu: h})
                  r.appendChild(e), r.appendChild(h), c.id = n}this.disableComponent(!1)}return this.component = r, r}
            setLocale (e) {this.component && this.langOptions.supportedLangs.forEach((t => {
                const s = t.lang,i = document.getElementById(`language-selection-option-${s}`),n = i.querySelector('span'),o = t.label || e[`language_${"und"===s?"detect":s}`] || t.lang
                i.title = o, n.innerText = o}))}
            setTag (e, t = !0) {let s = ''
              null !== e && (s = e.toLowerCase()), this.supportedLangList.length && (s = this.supportedLangList.indexOf(s) >= 0 ? s : null), this.selectLanguage(s, t)}
            disableComponent (e) {if (this.component) {const t = this.config.util,s = this.component
                if (this.renderAsListItem) {const i = 'disable'
                  e ? t.addCSSClass(s, i) : t.removeCSSClass(s, i)}else s.querySelector('button').disabled = e}}
            selectLanguage (e, t = !0) {let s = e
              this.localizedText = this.settings.i18n[s], this.component && this.updateActiveLocale(s), 'und' === s && (s = null), t && (this.updateProfile(s), this.config.storageService.setItem(Ut(this.settings), s)), this.updateSynthesis(s), this.updateRecognition(s), this.config.chatWidget.onLanguageUpdate(s, t), this.currentTag !== s && (this.currentTag = s, this.config.eventDispatcher.trigger(i.CHAT_LANG, s))}
            updateProfile (e) {if (this.core.isConnected()) {const t = {profile: {languageTag: e}}
                e || (t.profile.locale = e), this.core.updateUser(t, {sdkMetadata: {version: $}})}}
            updateSynthesis (e) {const t = this.config.chatWidget
              if (e) {if (this.isTTSEnabled || (t.enableSpeechSynthesisService(!0), this.isTTSEnabled = !0), this.settings.enableBotAudioResponse) {const t = this.synthesisLocaleVoiceMap[e] || {lang: e}
                  this.core.setTTSVoice([t])}}else this.isTTSEnabled = !1, this.settings.enableBotAudioResponse && this.core.cancelTTS(), t.enableSpeechSynthesisService(!1)}
            updateRecognition (e) {const t = this.config,s = this.recognitionLocaleMap[e],i = t.chatWidget
              s ? (this.isVoiceEnabled || (i.setVoiceRecognitionService(!0), this.isVoiceEnabled = !0), this.core.setRecognitionLocale(s)) : (this.isVoiceEnabled = !1, this.core.stopRecognition(), this.core.setRecognitionLocale(null), i.setVoiceRecognitionService(!1))}
            updateActiveLocale (e) {const t = this.config.util,s = e || 'und',i = document.getElementById(`${this.cssPrefix}-language-selection-menu`),n = 'active'
              if (i) {const e = i.querySelector(`li.${this.cssPrefix}-active`)
                e && t.removeCSSClass(e, n);const o = i.querySelector(`[data-value="${s}"]`)
                o && t.addCSSClass(o, n)}}
            initLanguage () {const {primary:e} = this.langOptions || {},t = this.config.storageService.getItem(Ut(this.settings))
              let s = e
              t && (s = 'null' === t ? null : t), void 0 !== s && this.setTag(s)}
          }
          function Ut (e) {return`${e.name}-${e.channelId}-${e.userId}`}function Ht (e, t) {navigator.language.toLowerCase() === e && (t[e.substring(0, 2)] = e)}
          class $t {
            constructor (e) {this.getItem = e => (!this.cache[e] && this.isStorage && (this.cache[e] = this.storage.getItem(e)), this.cache[e]), this.setItem = (e, t) => {
                this.isStorage ? (this.storage.setItem(e, t), delete this.cache[e]) : this.cache[e] = t}, this.removeItem = e => {
                this.isStorage && this.storage.removeItem(e), delete this.cache[e]}, this.cache = {}, c(e) ? (this.isStorage = !0, this.storage = window[e]) : this.isStorage = !1}
          }
          const jt = window.BroadcastChannel,Wt = 'collapsed',Gt = 'expanded',Yt = 'none'
          class qt extends Re {
            constructor (e, t, s, i, n, a, r, c, l, h, d, p) {var u,g
              super(), this.settings = e, this.util = t, this.connect = s, this.openChat = i, this.closeChat = n, this.handleSessionEnd = a, this.receiveMessage = r, this.sentMessage = c, this.getUnreadMessagesCount = l, this.onConnectionStatusChange = h, this._core = d, this._eventDispatcher = p, this.FINAL_RESULT_DISPLAY_TIMEOUT = 200, this._logger = new o('ChatComponent'), this._attachmentDivs = [], this._unreadMsgCount = 0, this._latestSkillMessages = [], this._skillMessages = [], this._isNewMessage = !0, this.isTTSMute = !0, this.isInitMessageSent = !1, this.isExpanded = !1, this.isFirstMessage = !0, this.isResponseReceived = !1, this.messageIDs = [], this.agentSession = {}, this.cssPrefix = e.name, this.currentLocale = e.locale, this._localeText = e.i18n[e.locale], this.isOpen = !1, this.isExpanded = 'init' === (null === (u = e.initMessageOptions) || void 0 === u ? void 0 : u.sendAt) || e.openChatOnLoad || e.embedded, this.isInitMessageSent = e.enableHeadless, this._isFirstConnect = !0, this.enableDefaultBotResponse = this.settings.enableDefaultClientResponse, this._configureStorage();const m = this.storageService.getItem(this._userAvatarStorageId)
              if (m && (e.icons.avatarUser = m), this.settings.enableEndConversation) {const e = this._localeText
                this.endConversationPrompt = t.getBanner({text: e.endConversationConfirmMessage || '',description: e.endConversationDescription || '',actions: [{label: e.noText,handler: this.closePrompt}, {label: e.yesText,handler: this.endConversation,type: 'filled'}]}, this), t.addCSSClass(this.endConversationPrompt, 'end-conversation-prompt')}this.settings.enableTabsSync || (this._initBroadcaster = () => {
              }), this._core.on(E.g.Open, (() => this._sendInitMessages())), this._core.on(E.g.State, (e => this._onChatServerStatusChange(e))), this._core.on(E.g.MessageReceived, (e => this._onMessageReceived(e))), this.element = this._createElement(), this.settings.enableBotAudioResponse && (this.isTTSMute = this.settings.initBotAudioMuted), this._initMultiLangChat(), 'function' != typeof h && (this.onConnectionStatusChange = () => {
              }), this.settings.showTypingIndicator && (this.typingIndicator = new _t(A.LEFT, e, t)), this.setAgentDetails(JSON.parse(this.storageService.getItem(this._agentNameStorageId))), !this.settings.enableTimestamp || 'relative' !== this.settings.timestampMode && 'default' !== this.settings.timestampMode ? (this.setTimestampHeaderIfNewDate = () => {
              }, this.updateRelativeTimestamp = () => {
              }) : this.relativeTimestamp = new Nt(e, t), 'action' !== (null === (g = this.settings.focusOnNewMessage) || void 0 === g ? void 0 : g.toLowerCase()) && (this.focusMessageFirstAction = () => {
              })}
            render (e) {this._logger.info('Widget render', e)}
            embedInElement (e) {const t = document.getElementById(e)
              if (!t)throw new Error('Can not embed chat widget.');this.util.addCSSClass(t, 'wrapper', this.settings.theme, 'embedded'), this.appendToElement(t)}
            showChat () {if (!this.isOpen) {const e = this.util
                e.removeCSSClass(this.element, Wt), e.addCSSClass(this.element, Gt), e.removeCSSClass(this.chatWidgetDiv, Yt), this.settings.embedded || setTimeout((() => {
                  e.addCSSClass(this._botButton, Yt)}), 250), this.isOpen = !0, this.isExpanded = !0, this.updateNotificationBadge(0), this._scrollToBottom(), this.footer.focusTextArea(), this._sendInitMessages()}}
            onClose () {if (this.isOpen) {const e = this.util
                this._ttsCancel(), e.removeCSSClass(this.element, Gt), e.addCSSClass(this.element, Wt), this.settings.embedded || (e.removeCSSClass(this._botButton, Yt), setTimeout((() => {
                  e.addCSSClass(this.chatWidgetDiv, Yt), this._botButton.focus()}), 250), this.updateNotificationBadge(this.getUnreadMessagesCount())), this.isOpen = !1}}
            sendExitEvent () {const e = {messagePayload: {type: E.h.CloseSession},userId: this.settings.userId}
              if (this.settings.delegate && this.settings.delegate.beforeEndConversation && (0, n.j)(this.settings.delegate.beforeEndConversation))try {this.settings.delegate.beforeEndConversation(e).then((e => {
                    e && this.sendMessage(e, {hidden: !0,delegate: !1})}))} catch(e) {this._logger.error(e) }else this.sendMessage(e, {hidden: !0,delegate: !1});this.isInitMessageSent = !1}
            updateNotificationBadge (e) {var t
              this._unreadMsgCount = e, e > 0 ? (this._botNotificationBadge.innerText = `${e}`, this._botButton.appendChild(this._botNotificationBadge)) : (null === (t = this._botNotificationBadge) || void 0 === t ? void 0 : t.parentElement) && this._botNotificationBadge.remove()}
            onToggleNarration (e) {this._toggleNarration(e), this._eventDispatcher.trigger(i.CLICK_AUDIO_RESPONSE_TOGGLE, e)}
            remove () {super.remove(), this.settings.embedded && window.removeEventListener('resize', this.resizeEventListener)}
            clearConversationHistory () {this.clearMessages(this.settings.userId), this._clearChatPane(), this._broadcastAction({type: 'actionClearHistory'}), this.lastMessageSenderType = null, this._stopDefaultMessages(), this.updateNotificationBadge(0)}
            clearMessages (e, t) {const s = `${this.settings.name}-${e}-messages`;(t ? window[t] : this.storageService).getItem(s) && this.storageService.removeItem(s)}
            clearAllMessage () {const e = null === window || void 0 === window ? void 0 : window.localStorage,t = (null == e ? void 0 : e.length) || 0
              if (t) {const s = /oda-chat-.*-messages/g
                for (let i = 0;i < t;i++) {const t = e.key(i);(null == t ? void 0 : t.match(s)) && e.removeItem(t)}}}
            setUserInputMessage (e) {this.footer.setUserInputText(e)}
            setUserInputPlaceholder (e) {this.footer.setUserInputPlaceholder(e)}
            getWebViewComponent () {return this.webViewComponent}
            refreshWebView (e) {this.webViewComponent.setProps(e), this.webViewElem.remove(), this.webViewElem = this.webViewComponent.render(), this.chatWidgetDiv.appendChild(this.webViewElem)}
            onMessageActionClicked (e) {switch (this.onSpeechToggle(!1), e.type) {case E.a.Postback:
                  this._scrollToBottom(), 'none' !== this.settings.disablePastActions && e.messageComponent.disableActions(), e.getPayload().then((t => {
                    const s = (0, E.n)({postback: t,text: e.label,type: E.h.Postback})
                    this.sendMessage(s)}))
                  break;case E.a.Location:
                  this._shareUserLocation()
                  break;case E.a.Share:
                  navigator.share ? e.getPayload().then((t => {
                    navigator.share({text: t,title: e.label}).then((() => {
                      'none' !== this.settings.disablePastActions && e.messageComponent.disableActions()}))})) : this._showBanner(this._localeText.shareFailureMessage)}}
            applyDelegates (e) {var t
              const s = [E.h.Text, E.h.Location, E.h.Attachment]
              let i
              return i = 'string' == typeof e ? (0, E.o)(e, null === (t = this.speechFinalResult) || void 0 === t ? void 0 : t.speechId) : (0, E.v)(e) ? (0, E.l)(e) : (0, E.u)(e) ? (0, E.n)(e) : e, s.indexOf(i.messagePayload.type) >= 0 && this.settings.delegate.beforeSend && (0, n.j)(this.settings.delegate.beforeSend) ? i = this._executeSendDelegate(i, this.settings.delegate.beforeSend) : i.messagePayload.type === E.h.Postback && this.settings.delegate.beforePostbackSend && (0, n.j)(this.settings.delegate.beforePostbackSend) && (i = this._executeSendDelegate(i, this.settings.delegate.beforePostbackSend)), i}
            sendMessage (e, t) {return this._stopDefaultMessages(), !this.settings.enableSpeechAutoSend && this.speechFinalResult && 'string' == typeof e && e.toLowerCase().indexOf(this.speechFinalResult.text.toLowerCase()) >= 0 && (e = (0, E.o)(e, this.speechFinalResult.speechId)), this.footer.focusTextArea(), this._ttsCancel(), void 0 === (t = t || {}).delegate && (t.delegate = !0), t.delegate && this.settings.delegate && (e = this.applyDelegates(e)), e && this._core.sendMessage(e, {sdkMetadata: {version: $}}).then((s => {
                  this._logger.debug('onMessageSent', e), this.showTypingIndicator(), this.sentMessage(s), this.isResponseReceived = !1, this.enableDefaultBotResponse && this.startDefaultResponseTimer(), this.speechFinalResult = null, (null == t ? void 0 : t.hidden) ? this.lastMessageSenderType = E.j.User : this._onMessageSent(s)}))}
            uploadFile (e, t) {const s = this._localeText
              this._ttsCancel(), this._onSendMessage();const i = new Promise(((i, n) => {
                var o,a
                if (this.settings.enableHeadless)this._core.uploadAttachment(e, {sdkMetadata: {version: $}}).then((e => this._core.sendMessage(this.settings.delegate ? this.applyDelegates(e) : e, {sdkMetadata: {version: $}}))).then((e => {
                    i(e)})).catch((e => {
                    n(e)}))
                else {this._scrollToBottom();const r = `${null===(o=e.name)||void 0===o?void 0:o.replace(/[\s:'"\\/[\]~,.;^`()@#%*+=$&!{}?<>|]/g,"")}${Math.floor(1e4+9e4*Math.random())}${Date.now()%1e5}`,c = this.util.createDiv()
                  c.id = r, this._attachmentDivs.push({divId: r,fileName: e.name}), this.setTimestampHeaderIfNewDate(new Date), this._appendMessageToConversation(c);const l = t ? t.maxSize : W
                  if (e.size > l) {this._scrollToBottom();const t = l / 1048576
                    let i = t.toString()
                    'number' == typeof (a = t) && isFinite(a) && Math.floor(a) === a || (i = t.toFixed(3));const o = `${e.name} - ${s.uploadFailed}`,c = s.uploadFileSizeLimitExceeded.replace('{0}', i)
                    this._displayUploadError(o, c, r), this.updateRelativeTimestamp(E.j.User), n(new Error(c))}else if (0 === e.size) {this._scrollToBottom();const t = `${e.name} - ${s.uploadFailed}`,i = s.uploadFileSizeZeroByte
                    this._displayUploadError(t, i, r), this.updateRelativeTimestamp(E.j.User), n(new Error(i))}else {const t = new St(e.name, A.RIGHT, this.settings, this.util)
                    this.updateRelativeTimestamp(E.j.User), c.appendChild(t.render()), this._scrollToBottom(), this._core.uploadAttachment(e, {sdkMetadata: {version: $}}).then((e => this._core.sendMessage(this.settings.delegate ? this.applyDelegates(e) : e, {sdkMetadata: {version: $}}))).then((t => {
                      t.messagePayload.attachment.title = e.name, c.remove(), this._attachmentDivs = this._attachmentDivs.filter((e => e.divId !== r)), this.isFirstMessage = !1, this.sentMessage(t), this._onMessageSent(t), i(t)})).catch((t => {
                      this._handleUploadError(e.name, t.message, r), n(t)}))}}}))
              return i.catch((e => {
                  this._logger.error(e)})), i}
            refreshTTS () {this.header.showTTSButton(!!this.settings.ttsService)}
            getSuggestions (e) {if (!this.settings.enableAutocompleteClientCache || this.settings.enableAutocompleteClientCache && !this.footer.getSuggestionsValid())return this._core.getSuggestions(e).then((e => (this.footer.displaySuggestions(e), Promise.resolve(e))));const t = this._filterSuggestions(this.footer.getSuggestions(), e)
              return null !== this.footer && this.footer.displaySuggestions(t), Promise.resolve(t)}
            getUnreadMsgsCount () {return this._unreadMsgCount}
            getMessages () {const e = this.storageService.getItem(this._chatStorageId)
              return e ? JSON.parse(e).map((e => Object.assign({}, e))) : []}
            loadChat () {const e = this.getMessages()
              e.length && this.storageService.setItem(this._chatStorageId, JSON.stringify(e))}
            getAgentDetails () {return this.agentSession}
            setAgentDetails (e) {this.agentSession = Object.assign(Object.assign({}, this.agentSession), e), this.setAgentTypingCue(), this.storageService.setItem(this._agentNameStorageId, JSON.stringify(this.agentSession))}
            setUserAvatar (e) {this.settings.icons.avatarUser = e, this.storageService.setItem(this._userAvatarStorageId, e), document.querySelectorAll(`.${this.cssPrefix}-right .${this.cssPrefix}-message-icon`).forEach((t => {
                t.parentElement.replaceWith(this.getAvatar(e, this._localeText.avatarUser))}))}
            _saveMessage (e) {const t = this.getMessages()
              t.length >= this.settings.messageCacheSizeLimit && t.splice(0, t.length - (this.settings.messageCacheSizeLimit - 1));let s = JSON.stringify(e).substring(1, JSON.stringify(e).length - 1)
              s = `{${s}, "date":"${new Date}"}`, t.push(JSON.parse(s)), this.storageService.setItem(this._chatStorageId, JSON.stringify(t))}
            _configureStorage () {const e = this.settings
              e.userId ? e.storageType !== ze.LOCAL && e.storageType !== ze.SESSION && (e.storageType = ze.LOCAL) : e.storageType = ze.SESSION, this._chatStorageId = `${e.name}-${e.userId}-messages`, this._agentNameStorageId = `${e.name}-${e.userId}-agent-details`, this._userAvatarStorageId = `${e.name}-${e.userId}-user-avatar`, this.storageService = new $t(e.storageType)}
            setVoiceRecognitionService (e) {this.footer.disableVoiceModeButton(!e, {src: 'lang'})}
            enableSpeechSynthesisService (e) {this.header.disableTTSButton(!e)}
            onShareLocation () {this._shareUserLocation()}
            setPrimaryChatLanguage (e) {this.multiLangChat.setTag(e)}
            onLanguageUpdate (e, t = !0) {const s = this.settings.i18n,i = Object.assign(Object.assign(Object.assign({}, s.en), s[this.settings.locale]), s[e])
              t && this._broadcastAction({type: 'actionLanguage',tag: e}), this.currentLocale = e, this._botButton.title = i.chatButtonTitle || i.chatTitle, this.header.setLocale(i), this.footer.setLocale(i), this.util.setLocale(i), this.typingIndicator.updateTypingCueIcon(i.avatarBot), document.querySelectorAll(`.${this.cssPrefix}-message-icon`).forEach((e => {
                const t = e.parentElement.parentElement.className.indexOf(`${this.cssPrefix}-left`) < 0 ? i.avatarUser : i.avatarBot
                'img' === e.localName ? e.alt = t : e.setAttribute('aria-label', t)})), this.webViewComponent.setProps({accessibilityTitle: i.webViewAccessibilityTitle,closeButtonLabel: i.webViewClose,errorInfoDismissLabel: i.webViewErrorInfoDismiss,errorInfoText: i.webViewErrorInfoText}), this.multiLangChat && this.multiLangChat.setLocale(i), this.relativeTimestamp && this.relativeTimestamp.setLocale(i), this._localeText = i}
            showTypingIndicator () {const e = document.getElementById(`${this.cssPrefix}-connection-error`)
              e && e.remove(), this.settings.showTypingIndicator && (this.typingIndicator.append(this._conversationContainer), this._scrollToBottom())}
            hideTypingIndicator () {this.settings.showTypingIndicator && this.typingIndicator.remove()}
            showConnectionError () {this.showErrorMessage(this._localeText.connectionFailureMessage)}
            showSessionError () {this.showErrorMessage(this._localeText.sessionEndedMessage)}
            showErrorMessage (e) {var t
              const s = `${this.cssPrefix}-connection-error`,i = {type: E.h.Text,text: e,globalActions: [{type: E.a.Postback,label: this._localeText.connectionRetryLabel}]},n = xt.fromMessage(this.settings, this.util, {messagePayload: i})
              n.onActionClick = () => {
                this.connect()};const o = this.util.wrapMessageBlock(A.LEFT, n.render(), this.settings.icons.avatarBot)
              o.id = s, this._conversationContainer.appendChild(o), (null === (t = this.typingIndicator) || void 0 === t ? void 0 : t.isVisible()) && this.hideTypingIndicator()}
            showEndConversationPrompt () {Oe(this.chatPane.element, this.endConversationPrompt)}
            updateDefaultResponse (e) {if (this.isFirstMessage = !1, !this.isResponseReceived) {const t = {source: E.k.Bot,messagePayload: {type: E.h.Text,text: e},userId: this.settings.userId,msgId: `${Date.now()}`}
                this._saveMessage(t), this._renderMessagesAndScroll([t])}}
            startDefaultResponseTimer () {const e = this._localeText,t = 1e3
              this.defaultResponseTimer = window.setTimeout((() => {
                this.isFirstMessage && this.updateDefaultResponse(e.defaultGreetingMessage), this.defaultResponseInterval = window.setInterval((() => {
                  this.updateDefaultResponse(e.defaultWaitMessage)}), this.settings.defaultWaitMessageInterval * t), this.waitMessageClearTimer = window.setTimeout((() => {
                  window.clearInterval(this.defaultResponseInterval)}), (this.settings.typingIndicatorTimeout - 1) * t), this.defaultResponseTimer = window.setTimeout((() => {
                  this.hideTypingIndicator(), this.updateDefaultResponse(e.defaultSorryMessage)}), this.settings.typingIndicatorTimeout * t)}), this.settings.defaultGreetingTimeout * t)}
            endConversation () {this.sendExitEvent(), this.closePrompt()}
            closePrompt () {this.endConversationPrompt.querySelector(`.${this.cssPrefix}-prompt-banner-close-button`).click()}
            _onChatServerStatusChange (e) {if (this._isFirstConnect && (this._loadPreviousConversations(), this._isFirstConnect = !1), Number.isInteger(e) && e !== E.e.Open) {this._stopBroadcaster(), this.footer.isDisabled() || (this.footer.disable(), this.header.disable(), this._logger.debug('WebSocket not open, send message button disabled')), this._onDisconnection(), e === E.e.Connecting ? this.showTypingIndicator() : this.hideTypingIndicator()
                for (const e of this._attachmentDivs) this._handleUploadError(e.fileName, E.f.UploadNetworkFail, e.divId); this.multiLangChat && this.multiLangChat.disableComponent(!0)}else this.hideTypingIndicator(), this._initBroadcaster(), this.footer.isDisabled() && (this.footer.disable(!1), this.header.disable(!1), this._logger.debug('Connection established, send message button enabled')), this._onConnection();this.onConnectionStatusChange(e)}
            _initMultiLangChat () {const e = this.settings
              this.multiLangChat = new Ft(e.multiLangChat, {webCore: this._core,chatWidget: this,eventDispatcher: this._eventDispatcher,settings: e,synthesisVoices: e.skillVoices,storageService: new $t(e.storageType),util: this.util}), e.multiLangChat && this.header.addLanguageSelect(this.multiLangChat)}
            _shareUserLocation () {const e = this._localeText
              if (r()) {const t = new St(e.requestLocation, A.RIGHT, this.settings, this.util)
                this._appendMessageToConversation(t.render()), this._scrollToBottom(), (r() ? new Promise(((e, t) => {
                  navigator.geolocation.getCurrentPosition((t => {
                    e(t)}), (e => {
                    t(e)}), {timeout: 5e3})})) : Promise.reject(new Error('Location service is not available.'))).then((e => {
                  const s = e.coords,i = (0, E.n)({location: {latitude: s.latitude,longitude: s.longitude,title: void 0},type: E.h.Location})
                  t.remove(), this.sendMessage(i)}), (s => {
                  let i
                  switch (s.code) {case s.PERMISSION_DENIED:
                      i = e.requestLocationDeniedPermission
                      break;case s.POSITION_UNAVAILABLE:
                      i = e.requestLocationDeniedUnavailable
                      break;case s.TIMEOUT:
                      i = e.requestLocationDeniedTimeout
                      break;default:
                      i = e.requestLocationDeniedPermission}this._showBanner(i), t.remove()}))}else this._showBanner(e.requestLocationDeniedUnavailable)}
            _filterSuggestions (e, t) {const s = []
              for (const i of e) i.search(new RegExp(t, 'i')) >= 0 && s.push(i); return s}
            _handleUploadError (e, t, s) {const i = this._localeText,n = `${e} - ${i.uploadFailed}`
              let o = ''
              switch (t) {case E.f.UploadMaxSize:
                  o = i.uploadFileSizeLimitExceeded.replace('{0}', '25')
                  break;case E.f.UploadZeroSize:
                  o = i.uploadFileSizeZeroByte
                  break;case E.f.UploadBadFile:
                  o = i.uploadUnsupportedFileType}this._displayUploadError(n, o, s)}
            _executeSendDelegate (e, t) {var s
              const i = JSON.parse(JSON.stringify(e))
              let n,o = JSON.parse(JSON.stringify(e))
              e.messagePayload.type === E.h.Text && (null === (s = e.sdkMetadata) || void 0 === s ? void 0 : s.speechId) && (n = (e.messagePayload.text || '').toLowerCase());try {o = t(i)} catch(e) {this._logger.error(e) }if (o && o.messagePayload || (o = null), o && !(0, E.y)(o) && (this._logger.error('The generated delegate message is invalid. Sending original message instead.'), o = e), n && o)if (o.messagePayload)if (o.messagePayload.type === E.h.Text) {const e = o.messagePayload.text;(null == e ? void 0 : e.toLowerCase().indexOf(n)) < 0 && delete o.sdkMetadata}else delete o.sdkMetadata;else delete o.sdkMetadata;return o}
            _displayUploadError (e, t, s) {const i = new yt(e, t, A.RIGHT, this.settings, this.util, !0),n = document.getElementById(s)
              n.firstElementChild && n.removeChild(n.firstElementChild), this._attachmentDivs = this._attachmentDivs.filter((e => e.divId !== s));const o = this.settings.icons.error || te
              n.appendChild(i.render(o))}
            _makeButtonDraggable (e, t) {const s = this.util
              let i,n,o = !1,a = !1,r = 0,c = 0,l = 0,h = 0,d = 0,p = 0
              const u = e => {
                  let t,s
                  const i = e.target.classList
                  for (let n = 0;n < i.length;n++)i[n].indexOf('button-drag-handle') && ('touchstart' === e.type ? (t = e.touches[0].clientX, s = e.touches[0].clientY) : (t = e.clientX, s = e.clientY), r = t - l, c = s - h, d = t, p = s, o = !0)},g = u => {
                  let g,m
                  if (o) {
                    'touchmove' === u.type ? (g = u.touches[0].clientX, m = u.touches[0].clientY) : (g = u.clientX, m = u.clientY);const o = g - d,f = m - p
                    i = g - r, n = m - c, l = i, h = n, (o >= 5 || f >= 5 || o <= -5 || f <= -5) && (s.addCSSClass(e, 'drag'), t.style.transform = `translate3d(${i}px, ${n}px, 0)`, t.onclick = null, a = !0)}},m = () => {
                  a && (setTimeout((() => {
                    t.onclick = this.openChat.bind(this)}), 10), t.focus(), a = !1), o = !1},f = s.createDiv(['button-drag-handle'])
              t.appendChild(f), t.addEventListener('touchstart', u), document.addEventListener('touchmove', g), t.addEventListener('touchend', m), t.addEventListener('mousedown', u), document.addEventListener('mousemove', g), t.addEventListener('mouseup', m)}
            _createElement () {var e,t,s,i,n
              const o = this.settings,a = this.util,r = this._localeText,c = a.createDiv(o.embedded ? [] : ['wrapper', o.theme, o.enableHeadless ? 'none' : ''])
              this.chatWidgetDiv = a.createDiv(['widget', 'flex', 'col']), this.chatWidgetDiv.setAttribute('role', 'region'), this.chatWidgetDiv.setAttribute('aria-labelledby', `${this.cssPrefix}-title`), this.header = new Ke(o, a, this.closeChat.bind(this), this.clearConversationHistory.bind(this), this.onToggleNarration.bind(this), this._core, this.showEndConversationPrompt.bind(this)), this.chatWidgetDiv.appendChild(this.header.element), o.embedTopStickyId && this.addCustomBanner(o.embedTopStickyId, this.chatWidgetDiv, ['embed-sticky-top']), this.chatPane = new Je(a), this._scrollContent = a.createDiv(['conversation-pane', this.settings.icons.avatarBot ? 'bot-icon' : '', this.settings.icons.avatarUser ? 'user-icon' : '']), 'top' === o.conversationBeginPosition && (this._scrollContent.style.flex = 'auto'), o.embedTopScrollId && this.addCustomBanner(o.embedTopScrollId, this._scrollContent, ['embed-scroll-top']), this._conversationContainer = a.createDiv(['conversation-container']), this._conversationContainer.setAttribute('role', 'log'), this._conversationContainer.setAttribute('aria-live', 'polite'), this._conversationContainer.setAttribute('aria-atomic', 'false'), this._scrollContent.appendChild(this._conversationContainer), this.chatPane.element.appendChild(this._scrollContent), o.embedBottomScrollId && this.addCustomBanner(o.embedBottomScrollId, this.chatPane.element, ['embed-scroll-bottom']), this.chatWidgetDiv.appendChild(this.chatPane.element), o.embedBottomStickyId && this.addCustomBanner(o.embedBottomStickyId, this.chatWidgetDiv, ['embed-sticky-bottom']), this.footer = new $e(a, this.sendMessage.bind(this), this.uploadFile.bind(this), o, this.getSuggestions.bind(this), this.onSpeechToggle.bind(this), this._shareUserLocation.bind(this), this._eventDispatcher, this), this.chatWidgetDiv.appendChild(this.footer.element), (e = o.webViewConfig).accessibilityTitle || (e.accessibilityTitle = r.webViewAccessibilityTitle), (t = o.webViewConfig).closeButtonLabel || (t.closeButtonLabel = r.webViewClose), (s = o.webViewConfig).errorInfoDismissLabel || (s.errorInfoDismissLabel = r.webViewErrorInfoDismiss), (i = o.webViewConfig).errorInfoText || (i.errorInfoText = r.webViewErrorInfoText), (n = o.webViewConfig).closeButtonIcon || (n.closeButtonIcon = o.icons.close), this.webViewComponent = new Lt(o.webViewConfig, a, o), this.webViewElem = this.webViewComponent.render(), this.chatWidgetDiv.appendChild(this.webViewElem);const l = this.webViewComponent,h = `${this.cssPrefix}-webview`
              if (this.webviewLinkHandler = {target: h,onclick: function () {l.open(this.href)}}, o.linkHandler && o.linkHandler.target === h && (o.linkHandler = this.webviewLinkHandler), c.appendChild(this.chatWidgetDiv), o.embedded)this.isOpen = !0, a.addCSSClass(c, 'open')
              else {const e = o.icons.launch || (o.colors && o.colors.branding ? re.replace('#025e7e', o.colors.branding) : re),t = 'button',s = a.createIconButton({css: [t],icon: e,iconCss: [`${t}-icon`],title: r.chatButtonTitle || r.chatTitle})
                s.classList.remove(`${this.cssPrefix}-icon`), this._botButton = s, this._botButton.onclick = this.openChat.bind(this), this._botNotificationBadge = a.createDiv(['notification-badge']), c.appendChild(s), o.enableDraggableButton && this._makeButtonDraggable(c, s), o.openChatOnLoad || a.addCSSClass(c, Wt), a.addCSSClass(this.chatWidgetDiv, Yt)}return c}
            _appendMessageToConversation (e) {var t
              this._conversationContainer.appendChild(e), (null === (t = this.typingIndicator) || void 0 === t ? void 0 : t.isVisible()) && (this.hideTypingIndicator(), this.showTypingIndicator())}
            _scrollToBottom () {const e = this.chatPane.element
              setTimeout((() => {
                e && (e.scrollTop = e.scrollHeight)}), H.CHAT_SCROLL_DELAY)}
            _renderMessagesAndScroll (e) {return (null == e ? void 0 : e.length) ? new Promise((t => {
                this.settings.clientAuthEnabled && this.settings.enableAttachmentSecurity ? this._core.getAuthToken().then((s => {
                  this._renderMessages(e, s.token), t(), this._scrollToBottom()})).catch((() => {
                  this._renderMessages(e), t(), this._scrollToBottom()})) : (this._renderMessages(e), t(), this._scrollToBottom())})) : (this._renderMessages(e), Promise.resolve())}
            getAgentNameDiv (e, t) {var s
              const i = this.settings.icons;(null === (s = e.messagePayload.channelExtensions) || void 0 === s ? void 0 : s.agentSession) || (e.messagePayload.channelExtensions ? e.messagePayload.channelExtensions.agentSession = this.agentSession : e.messagePayload.channelExtensions = {agentSession: this.agentSession}), !this.agentSession.avatarImage && i.avatarBot && t.appendChild(this.getAgentIcon());const n = this.util.createDiv(['agent-name'])
              return n.title = this.agentSession.name, n.innerHTML = this.agentSession.name, n.setAttribute('aria-hidden', 'true'), this.agentSession.nameTextColor && (n.style.color = this.agentSession.nameTextColor), n}
            getAgentIcon () {const e = this.agentSession.name.split(' ').filter((e => e))
              let t = e[0][0]
              return e.length > 1 && (t += e[e.length - 1][0]), this.getAvatar(t.toUpperCase(), this.agentSession.name, !0)}
            setAgentTypingCue () {if (this.settings.showTypingIndicator) {const e = this.settings.icons,t = this._localeText
                e.avatarBot && (!this.agentSession.avatarImage && this.agentSession.name ? this.typingIndicator.setAgentTypingCue(this.getAgentIcon()) : this.typingIndicator.setAgentTypingCue(this.getAvatar(this.agentSession.avatarImage || e.avatarBot, t.avatarAgent || t.avatarBot)))}}
            getAvatar (e, t, s = !1) {const i = this.util
              let n
              const o = i.createDiv(['icon-wrapper', s ? 'agent-avatar' : ''])
              return s ? (n = i.createDiv(['agent-icon']), n.innerText = e, this.agentSession.avatarTextColor && (n.style.color = this.agentSession.avatarTextColor), this.agentSession.avatarBackgroundColor && (o.style.background = this.agentSession.avatarBackgroundColor)) : n = i.createImageIcon({icon: e,iconCss: ['message-icon'],title: t}), o.appendChild(n), o}
            getTime () {const e = new Date,t = (0, n.g)(e, {pattern: this.settings.timestampFormat,locale: this.settings.locale}),s = this.util.createDiv(['message-date'])
              return s.setAttribute('aria-live', 'off'), s.setAttribute('aria-hidden', 'true'), s.innerText = `${t}`, s}
            _renderMessages (e, t) {const s = this.util,i = {locale: this.currentLocale,webviewLinkHandler: this.webviewLinkHandler};(null == t ? void 0 : t.length) && (i.authToken = t, i.uri = this.settings.URI), e.forEach((e => {
                var t,n
                let o
                const a = Date.now(),r = vt(e) ? E.j.Skill : E.j.User,c = this.lastMessageSenderType === r && (!vt(e) || e.source === this.lastMessageSenderSource) && a - this.lastMessageTime < 1e4
                if (this.lastMessageSenderType = r, this.lastMessageSenderSource = vt(e) && e.source || this.lastMessageSenderSource, this.lastMessageTime = a, c || (o = s.createDiv(['message-block', 'flex']), this.lastMessageBlock = o), vt(e)) {const t = wt(e)
                  if (this.messageIDs.indexOf(t) >= 0)return;this.messageIDs.push(t)}const l = xt.fromMessage(this.settings, this.util, e, i)
                if (l.onActionClick = this.onMessageActionClicked.bind(this), void 0 !== l.ratingId && (this.pendingFeedback = l), vt(e))this._isNewMessage ? this._onReceiveMessage(l) : this._skillMessages.push(l), e.source === E.k.Agent && ((null === (t = e.messagePayload.channelExtensions) || void 0 === t ? void 0 : t.agentName) && this.setAgentDetails({name: e.messagePayload.channelExtensions.agentName,avatarImage: this.settings.icons.avatarAgent,nameTextColor: null,avatarTextColor: null,avatarBackgroundColor: null}), (null === (n = e.messagePayload.channelExtensions) || void 0 === n ? void 0 : n.agentSession) && this.setAgentDetails(e.messagePayload.channelExtensions.agentSession))
                else if (this.pendingFeedback) {const t = e
                  if (t.messagePayload.type === E.h.Text || t.messagePayload.type === E.h.Postback) {const e = t.messagePayload
                    this.pendingFeedback.highlightRating(e.text)}this.pendingFeedback = null}this.setTimestampHeaderIfNewDate(e.date || new Date), o && (this.createMessageBlock(e, o), this._appendMessageToConversation(o));const h = this.lastMessageBlock.querySelector('[class*="message-list"]'),d = this._renderMessage(e, l, h)
                if (d) {if (e.messagePayload.type === E.h.Card) {const e = h.querySelectorAll('[class*="message-bubble"]')
                    e.length && e[e.length - 1].classList.add(`${this.cssPrefix}-before-card`)}h.appendChild(d)}this.updateRelativeTimestamp(r), vt(e) && this.focusMessageFirstAction(l)}))}
            createMessageBlock (e, t) {const s = this.settings.icons,i = this._localeText,n = this.util
              let o,a,r
              if (vt(e)) {if (e.source === E.k.Agent ? (o = this.agentSession.name && this.getAgentNameDiv(e, t), a = s.avatarBot && (this.agentSession.avatarImage || !this.agentSession.name) && (this.agentSession.avatarImage || s.avatarBot), r = i.agentMessage.replace('{0}', `${this.agentSession.name||i.agent}`)) : (this.setAgentDetails({name: null,avatarImage: this.settings.icons.avatarAgent,nameTextColor: null,avatarTextColor: null,avatarBackgroundColor: null}), this.settings.showTypingIndicator && (this.typingIndicator.remove(), this.typingIndicator = new _t(A.LEFT, this.settings, this.util)), a = s.avatarBot, r = i.skillMessage), n.addCSSClass(t, 'left'), a) {const s = this.getAvatar(a, e.source === E.k.Agent && i.avatarAgent || i.avatarBot)
                  s.style.marginTop = e.source === E.k.Agent && this.agentSession.name && '16px', t.appendChild(s)}}else n.addCSSClass(t, 'right'), r = i.userMessage, s.avatarUser && t.appendChild(this.getAvatar(s.avatarUser, i.avatarUser));const c = n.createDiv(['messages-wrapper', 'flex', 'col'])
              o && c.appendChild(o);const l = this.util.createElement('span', ['screen-reader-only'])
              l.innerText = r, c.appendChild(l);const h = n.createDiv(['message-list', 'flex', 'col'])
              if (c.appendChild(h), this.settings.enableTimestamp && 'absolute' === this.settings.timestampMode) {const e = this.getTime()
                c.appendChild(e)}t.appendChild(c)}
            _renderMessage (e, t, s) {const i = this.settings.delegate
              if (i && i.render) {const t = this.util.createDiv(['message'])
                if (t.id = e.msgId, t.lang = this.settings.locale, s.appendChild(t), i.render(e))return null;t.remove()}return t.render()}
            setTimestampHeaderIfNewDate (e) {(0, n.l)(this.currTimestampHeader, e) || (this.currTimestampHeader = new Date(e), this._appendMessageToConversation(this.createTimestampHeader(this.currTimestampHeader)))}
            createTimestampHeader (e) {const t = this.util.createDiv(['timestamp-header'])
              return t.textContent = (0, n.g)(e, {pattern: this.settings.timestampFormat,locale: this.currentLocale || this.settings.locale}), t}
            updateRelativeTimestamp (e) {this.relativeTimestampElement || (this.relativeTimestampElement = this.relativeTimestamp.render()), this.relativeTimestampElement.remove(), this.relativeTimestamp.refresh(e), this._appendMessageToConversation(this.relativeTimestampElement)}
            focusMessageFirstAction (e) {e.hasActions() && setTimeout((() => {
                e.focusFirstAction()}), 290)}
            addCustomBanner (e, t, s) {const i = document.querySelector(`#${e}`)
              if (i) {const e = this.util.createDiv(s)
                e.appendChild(i), t.appendChild(e)}else this._logger.error(`Could not find element with ID '${e}'. No element embedded to the chat conversation pane.`)}
            onSpeechToggle (e) {const t = function (e) {const t = document.querySelector('.oda-chat-wrapper')
                  return getComputedStyle(t).getPropertyValue(e)}('--color-visualizer'),s = this._localeText
              this._ttsCancel(), this._eventDispatcher.trigger(i.CLICK_VOICE_TOGGLE, e), this.settings.enableSpeech && (e ? (this._hideBanner(), this.settings.speechLocale && !(0, E.w)(this.settings.speechLocale) ? this._showBanner(s.errorSpeechUnsupportedLocale) : this._core.startRecognition({onRecognitionText: this.onSpeechRecognition.bind(this),onVisualData: e => {
                this.footer.updateVisualizer(e, t)}}).then((() => {
                this.footer.setVoiceRecording(!0), this._scrollToBottom()})).catch((e => {
                this.footer.setVoiceRecording(!1);let t = ''
                switch (e.message) {case E.f.RecognitionMultipleConnection:
                    t = s.errorSpeechMultipleConnection
                    break;case E.f.RecognitionNotReady:
                    t = s.errorSpeechInvalidUrl
                    break;case E.f.RecognitionProcessingFailure:
                    t = s.errorSpeechTooMuchTimeout
                    break;default:
                    t = s.errorSpeechUnavailable}this._showBanner(t)}))) : (this._core.stopRecognition(), this.footer.setVoiceRecording(!1)))}
            onSpeechRecognition (e) {if (e)switch (e.type) {case 'error':
                    this._logger.error('Failed to recognize voice', e.text), e.text === E.f.RecognitionTooMuchSpeechTimeout && this._showBanner(this._localeText.errorSpeechTooMuchTimeout), this.footer.setVoiceRecording(!1)
                    break;case 'final':
                    let t = e.text
                    t.length > 0 ? (this.speechFinalResult && (t = `${this.speechFinalResult.text} ${t}`), this.footer.setUserInputText(t), this.settings.enableSpeechAutoSend ? setTimeout((() => {
                      const s = (0, E.o)(t, e.requestId)
                      this.sendMessage(s).then((() => {
                        this.footer.setUserInputText('')}))}), this.FINAL_RESULT_DISPLAY_TIMEOUT) : this.speechFinalResult = {speechId: e.requestId,text: t}, this.footer.setVoiceRecording(!1)) : this.footer.setUserInputText(this.speechFinalResult.text)
                    break;case 'partial':
                    let s = e.text
                    s.length > 0 && (this.speechFinalResult && (s = `${this.speechFinalResult.text} ${s}`), this.footer.setUserInputText(s))}}
            _disablePastActions (e) {switch (this.settings.disablePastActions) {case 'all':
                  e.forEach((e => {
                    e.disableActions()}))
                  break;case 'postback':
                  e.forEach((e => {
                    e.disablePostbacks()}))}}
            _onLoadPreviousMessages () {this._disablePastActions(this._skillMessages)}
            _onReceiveMessage (e) {('none' === this.settings.disablePastActions ? this._skillMessages : this._latestSkillMessages).push(e)}
            _onSendMessage () {this._disablePastActions(this._latestSkillMessages), this._latestSkillMessages = []}
            _onConnection () {('none' === this.settings.disablePastActions ? this._skillMessages : this._latestSkillMessages).forEach((e => {
                e.enablePostbacks()}))}
            _onDisconnection () {('none' === this.settings.disablePastActions ? this._skillMessages : this._latestSkillMessages).forEach((e => {
                e.disablePostbacks()}))}
            _clearChatPane () {var e
              let t = !1
              for ((null === (e = this.typingIndicator) || void 0 === e ? void 0 : e.isVisible()) && (t = !0, this.hideTypingIndicator());this._conversationContainer.firstChild;)this._conversationContainer.removeChild(this._conversationContainer.lastChild);t && this.showTypingIndicator(), this._renderMessagesAndScroll([]), this.isFirstMessage = !0, this.currTimestampHeader = null, this._ttsCancel(), this._eventDispatcher.trigger(i.CLICK_ERASE)}
            _initBroadcaster () {const {userId:e, channelId:t} = this.settings
              jt && (this._stopBroadcaster(), this.broadcaster = new jt(`${e}-${t}`), this.broadcaster.onmessage = this._onBroadcastMessage.bind(this))}
            _stopBroadcaster () {this.broadcaster && (this.broadcaster.close(), this.broadcaster = null)}
            _broadcast (e) {if (this.broadcaster) {const t = {type: 'message',message: e}
                if (vt(e)) {const s = wt(e)
                  if (this.messageIDs.indexOf(s) >= 0)return;t.digest = s}this.broadcaster.postMessage(t)}}
            _broadcastAction (e) {this.broadcaster && this.broadcaster.postMessage(e)}
            _onBroadcastMessage (e) {const t = e.data
              switch (t.type) {case 'message':
                  if (t.message.messagePayload.type === E.h.SessionClosed)return void this.handleSessionEnd();if (t.digest) {if (this.messageIDs.indexOf(t.digest) >= 0)return;this.receiveMessage(t.message)}else this.sentMessage(t.message), this._onSendMessage(), this.showTypingIndicator();this.hideTypingIndicator(), this._renderMessagesAndScroll([t.message])
                  break;case 'actionClearHistory':
                  this._clearChatPane()
                  break;case 'actionLanguage':
                  this.multiLangChat.setTag(t.tag, !1)}}
            _showBanner (e) {Oe(this.chatPane.element, this.util.getBanner({icon: we,text: e,closeText: this._localeText.webViewErrorInfoDismiss,closeIcon: this.settings.icons.close,autoClose: !0}))}
            _hideBanner () {document.querySelectorAll(`.${this.cssPrefix}-prompt-banner-close-button`).forEach((e => {
                e.click()}))}
            _stopDefaultMessages () {window.clearTimeout(this.defaultResponseTimer), window.clearInterval(this.defaultResponseInterval), window.clearTimeout(this.waitMessageClearTimer), this.hideTypingIndicator()}
            _onMessageReceived (e) {if (this._logger.debug('onMessageReceived', e), this._stopDefaultMessages(), this._scrollToBottom(), this.isResponseReceived = !0, this.isFirstMessage = !1, this.settings.enableDefaultClientResponse && (e.source === E.k.Agent ? this.enableDefaultBotResponse = !1 : this.enableDefaultBotResponse || (this.enableDefaultBotResponse = !0)), e) {if (this.settings.delegate && this.settings.delegate.beforeDisplay && (0, n.j)(this.settings.delegate.beforeDisplay)) {let t = JSON.parse(JSON.stringify(e))
                  try {t = this.settings.delegate.beforeDisplay(t)} catch(e) {this._logger.error(e) }if (!t)return;(0, E.y)(t) ? e = t : this._logger.error('The generated delegate message is invalid. Displaying original message instead.')}this.receiveMessage(e), this._broadcast(e), e.messagePayload.type === E.h.SessionClosed ? this.handleSessionEnd() : (this._renderMessagesAndScroll([e]), this.isTTSMute || this._core.speakTTS(e, this._localeText), this._saveMessage(e), this.isOpen || this.updateNotificationBadge(++this._unreadMsgCount))}}
            _onMessageSent (e) {this._saveMessage(e), this._scrollToBottom(), e && (this._broadcast(e), e.messagePayload && [E.h.Suggest, E.h.SessionClosed, E.h.CloseSession].indexOf(e.messagePayload.type) < 0 && (this.isOpen || this.updateNotificationBadge(++this._unreadMsgCount), this._renderMessagesAndScroll([e])))}
            _toggleNarration (e) {e || this._ttsCancel(), this.isTTSMute = !e}
            _loadPreviousConversations () {if (this.settings.enableLocalConversationHistory) {this.loadChat();const e = this.getMessages()
                e.length && (this._isNewMessage = !1, this._renderMessagesAndScroll(e.slice()).then((() => {
                  if (this._isNewMessage = !0, this._onLoadPreviousMessages(), this.relativeTimestamp && (this.relativeTimestamp.setRelativeTime(new Date(e[e.length - 1].date)), this.relativeTimestampElement = this.relativeTimestamp.render(), this._appendMessageToConversation(this.relativeTimestampElement)), this.settings.showPrevConvStatus) {const e = this.util.createElement('div', ['hr', 'flex'])
                    e.innerText = this._localeText.previousChats, this._appendMessageToConversation(e)}})))}}
            _sendInitMessages () {var e
              if (this._core.isConnected() && this.isExpanded && (this.multiLangChat && (this.multiLangChat.disableComponent(!1), this.multiLangChat.initLanguage()), !this.isInitMessageSent)) {const t = this.settings.initUserProfile
                if (t && this._core.updateUser(t, {sdkMetadata: {version: $}}).then((() => {
                    this.isInitMessageSent = !0})), this.settings.initUserHiddenMessage) {const e = this.settings.initUserHiddenMessage
                  this.sendMessage(e, {hidden: !0,delegate: !1}).then((() => {
                    this.isInitMessageSent = !0}))}(null === (e = this.settings.deviceToken) || void 0 === e ? void 0 : e.length) && this._core.sendDeviceToken(this.settings.deviceToken).then((() => {
                  this.isInitMessageSent = !0}))}}
            _ttsCancel () {this._core.cancelTTS()}
          }
        },49: function (e, t, s) {s.r(t), s.d(t, {redwoodStyles: function () {return i}});const i = '@keyframes scale-in-center{0%{opacity:1;transform:scale(0)}100%{opacity:1;transform:scale(1)}}@keyframes scale-out-center{0%{display:flex;opacity:1;transform:scale(1)}100%{display:none;opacity:1;transform:scale(0)}}@keyframes scale-in-br{0%{opacity:1;transform:scale(0);transform-origin:100% 100%}100%{opacity:1;transform:scale(1);transform-origin:100% 100%}}@keyframes scale-in-bl{0%{opacity:1;transform:scale(0);transform-origin:0 100%}100%{opacity:1;transform:scale(1);transform-origin:0 100%}}@keyframes scale-in-tl{0%{opacity:1;transform:scale(0);transform-origin:0 0}100%{opacity:1;transform:scale(1);transform-origin:0 0}}@keyframes scale-in-tr{0%{opacity:1;transform:scale(0);transform-origin:100% 0}100%{opacity:1;transform:scale(1);transform-origin:100% 0}}@keyframes scale-out-br{0%{opacity:1;transform:scale(1);transform-origin:100% 100%}99%{opacity:1;transform:scale(0.01);transform-origin:100% 100%}100%{display:none;opacity:1;transform:scale(0);transform-origin:100% 100%}}@keyframes scale-out-bl{0%{opacity:1;transform:scale(1);transform-origin:0 100%}99%{opacity:1;transform:scale(0.01);transform-origin:0 100%}100%{display:none;opacity:1;transform:scale(0);transform-origin:0 100%}}@keyframes popup-suggestion{0%{box-shadow:0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0);transform:scaleY(0.4);transform-origin:0 100%}100%{box-shadow:0 -12px 15px -12px rgba(0,0,0,.35);transform:scaleY(1);transform-origin:0 100%}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes banner-in{0%{transform:translateY(-20px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes banner-out{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-20px);opacity:0}}@keyframes typing-cue{0%{opacity:1}30%{opacity:.1}50%{opacity:1}100%{opacity:.1}}@keyframes oda-chat-webview-slide-out-bottom{0%{transform:translateY(0);opacity:1}95%{opacity:1}100%{transform:translateY(100%);opacity:0}}@keyframes oda-chat-webview-slide-in-bottom{0%{transform:translateY(100%);opacity:0}1%{opacity:1}100%{transform:translateY(0%);opacity:1}}.flex{display:flex;justify-content:space-between;align-items:center}.col{flex-direction:column}.none{display:none}.wrapper{--color-branding: #c0533f;--color-launch-icon-background: #c0533f;--color-text: #161513;--color-text-light: #161513;--color-header-background: #F1EFED;--color-header-button-fill: #161513;--color-header-text: #161513;--color-header-button-background-hover: rgba(22, 21, 19, 0.04);--color-header-button-fill-hover: #161513;--color-conversation-background: #F5F4F2;--color-timestamp: rgba(22, 21, 19, 0.65);--color-typing-indicator: #161513;--color-bot-message-background: #FFFFFF;--color-bot-text: #161513;--color-user-message-background: #E4E1DD;--color-user-text: #161513;--color-error-message-background: #FFF8F7;--color-error-border: #DC5C5E;--color-error-title: #D63B25;--color-error-text: #161513;--color-card-background: #FFFFFF;--color-card-nav-button: #FFF;--color-card-nav-button-focus: #FBF9F8;--color-card-nav-button-hover: #FBF9F8;--color-actions-background: #fff;--color-actions-background-focus: rgba(22, 21, 19, 0.04);--color-actions-background-hover: rgba(22, 21, 19, 0.04);--color-actions-border: rgba(22, 21, 19, 0.5);--color-actions-text: #161513;--color-form-actions-background-hover: rgba(22, 21, 19, 0.04);--color-form-actions-border: rgba(22, 21, 19, 0.5);--color-form-actions-text: #161513;--color-actions-text-focus: #161513;--color-actions-text-hover: #161513;--color-global-actions-background: transparent;--color-global-actions-background-focus: rgba(22, 21, 19, 0.04);--color-global-actions-background-hover: rgba(22, 21, 19, 0.04);--color-global-actions-border: rgba(22, 21, 19, 0.5);--color-global-actions-text: #161513;--color-global-actions-text-focus: #161513;--color-global-actions-text-hover: #161513;--color-links: #c0533f;--color-user-links: #c0533f;--color-rating-star: #ececec;--color-rating-star-fill: #f0cc71;--color-agent-initials: #FFFFFF;--color-agent-avatar-background: #A890B6;--color-agent-name: rgba(22, 21, 19, 0.65);--color-horizontal-rule-background: #cbc5bf;--color-attachment-placeholder: #e3e1dc;--color-attachment-footer: #fff;--color-attachment-text: #161513;--color-footer-background: #fff;--color-footer-button-fill: #161513;--color-footer-button-background-hover: rgba(22, 21, 19, 0.04);--color-footer-button-fill-hover: #161513;--color-input-background: #fff;--color-input-border: #fff;--color-input-text: #161513;--color-recognition-view-text: #fff;--color-visualizer: #161513;--color-visualizer-container-background: #fff;--color-notification-badge-background: #312d2a;--color-notification-badge-text: #fff;--color-popup-background: #fff;--color-popup-text: #161513;--color-popup-button-background: #fff;--color-popup-button-text: #161513;--color-popup-horizontal-rule: #cbc5bf;--color-popup-item-background-hover: rgba(22, 21, 19, 0.04);--color-table-header-background: #f1efec;--color-table-background: #fff;--color-table-text: #161513;--color-table-separator: rgba(22, 21, 19, 0.1);--color-row-item-background-hover: rgba(22, 21, 19, 0.04);--width-full-screen: 375px;--position-top: 0;--position-left: 0;--position-right: 20px;--position-bottom: 20px;position:fixed;bottom:var(--position-bottom);left:var(--position-left);top:var(--position-top);right:var(--position-right);box-sizing:border-box;text-transform:none;z-index:10000;color:var(--color-text);font-size:16px;font-family:"Oracle Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",sans-serif;transition:all .25s ease-in-out;-webkit-font-smoothing:antialiased}.wrapper.classic{--color-branding: #025e7e;--color-launch-icon-background: #025e7e;--color-text: #161513;--color-text-light: #3a3631;--color-header-background: #025e7e;--color-header-button-fill: #fff;--color-header-button-fill-hover: #fff;--color-header-text: #fff;--color-conversation-background: #fff;--color-timestamp: #5b5652;--color-typing-indicator: #227e9e;--color-bot-message-background: #e5f1ff;--color-user-message-background: #ececec;--color-card-background: #e5f1ff;--color-card-nav-button: #4190ac;--color-card-nav-button-focus: #5fa2ba;--color-card-nav-button-hover: #0e7295;--color-actions-background: #025e7e;--color-actions-background-focus: #053242;--color-actions-background-hover: #06485f;--color-actions-border: #025e7e;--color-actions-text: #fff;--color-actions-text-focus: #fff;--color-actions-text-hover: #fff;--color-global-actions-background: #fff;--color-global-actions-background-focus: #053242;--color-global-actions-background-hover: #025e7e;--color-global-actions-border: #0e7295;--color-global-actions-text: #0e7295;--color-global-actions-text-focus: #fff;--color-global-actions-text-hover: #fff;--color-links: #0e7295;--color-user-links: #0e7295;--color-agent-name: #5b5652;--color-attachment-footer: #e5f1ff;--color-footer-background: #fff;--color-footer-button-fill: #161513;--color-footer-button-fill-hover: #025e7e;--color-visualizer: #025e7e;--color-notification-badge-background: #9a0007;--color-notification-badge-text: #fff;--color-popup-button-text: #025e7e}.wrapper.redwood-dark{--color-branding: #c0533f;--color-launch-icon-background: #c0533f;--color-text: #161513;--color-text-light: #fcfbfa;--color-header-background: #201e1c;--color-header-button-fill: #fff;--color-header-button-fill-hover: #fff;--color-header-button-background-hover: rgba(255, 255, 255, 0.04);--color-header-text: #fff;--color-conversation-background: #3a3631;--color-timestamp: #fcfbfa;--color-typing-indicator: #fff;--color-bot-message-background: #655f5c;--color-bot-text: #fff;--color-user-message-background: #fff;--color-user-text: #161513;--color-card-background: #655f5c;--color-card-nav-button: #d5b364;--color-card-nav-button-focus: #f7e0a1;--color-card-nav-button-hover: #b39554;--color-actions-background: #655f5c;--color-actions-background-focus: rgba(22, 21, 19, 0.5);--color-actions-background-hover: rgba(22, 21, 19, 0.3);--color-actions-border: #fff;--color-actions-text: #fff;--color-actions-text-focus: #fff;--color-actions-text-hover: #fff;--color-global-actions-background: #3a3631;--color-global-actions-background-focus: rgba(22, 21, 19, 0.3);--color-global-actions-background-hover: rgba(22, 21, 19, 0.3);--color-global-actions-border: #fff;--color-global-actions-text: #fff;--color-global-actions-text-focus: #fff;--color-global-actions-text-hover: #fff;--color-links: #f7e0a1;--color-user-links: #c0533f;--color-agent-name: #fcfbfa;--color-footer-background: #fff;--color-footer-button-fill: #161513;--color-input-background: #fff;--color-input-text: #161513;--color-recognition-view-text: #fff;--color-visualizer-container-background: #fff;--color-notification-badge-background: #312d2a;--color-notification-badge-text: #fff;--color-popup-button-text: #201e1c}.wrapper *{box-sizing:border-box}.wrapper b{font-weight:700}.wrapper .widget{position:absolute;bottom:calc(var(--position-bottom) * -1);border-radius:6px 6px 0 0;box-shadow:0px -4px 32px rgba(0,0,0,.1);right:calc(var(--position-right) * -1);width:100vw;max-width:100vw;height:85vh;max-height:calc(100vh - 60px);margin:0;overflow:hidden;text-decoration:none;text-transform:none;z-index:10000;align-items:stretch;background:var(--color-conversation-background)}.wrapper .widget .alert-wrapper{position:absolute;top:48px;width:100%}.wrapper .widget .alert-wrapper .alert-prompt{position:relative;left:0;right:0;width:auto;margin:6px;padding:10px;border-radius:10px;z-index:11}.wrapper .widget .msg-icon{padding:5px 10px 0 0}.wrapper .widget .msg{flex-grow:1}.wrapper button{position:relative;max-width:100%;padding:9px 16px;margin:0 0 8px;min-height:36px;line-height:16px;font-size:13.75px;font-weight:600;font-family:inherit;border-radius:4px;border-width:thin;border-style:solid;cursor:pointer;overflow:hidden;word-break:break-word;flex-shrink:0}.wrapper button:disabled{opacity:.5;cursor:not-allowed}.wrapper button.icon{width:36px;height:36px;padding:8px;margin:0;margin-inline-start:4px;border:none;border-radius:4px;color:var(--color-text);background-color:transparent;justify-content:center}.wrapper button.icon.with-label{width:auto;max-width:200px}.wrapper button.icon.with-label svg,.wrapper button.icon.with-label img{margin-right:4px}.wrapper button.icon.label-only{width:auto;max-width:200px}.wrapper button.icon.label-only svg,.wrapper button.icon.label-only img{display:none}.wrapper button svg,.wrapper button img{width:20px;height:20px;flex-shrink:0}.wrapper button .action-image{margin-inline-end:10px}.wrapper .button{position:absolute;right:0;bottom:0;height:48px;width:48px;max-width:unset;padding:0;margin:0;border:none;background-position:center center;background-repeat:no-repeat;cursor:pointer;justify-content:center;align-items:center;z-index:10000;color:var(--color-text);background-color:var(--color-launch-icon-background);border-radius:0;overflow:visible}.wrapper .button svg,.wrapper .button img{height:unset;width:unset;max-width:100%;max-height:100%}.wrapper .button:not(:disabled):hover,.wrapper .button:not(:disabled):focus,.wrapper .button:not(:disabled):active{background-color:var(--color-launch-icon-background)}.wrapper .header{height:56px;padding:0 8px;background-color:var(--color-header-background);color:var(--color-header-text)}.wrapper .header .logo{flex:0 0 auto;width:36px;max-width:100px;height:36px;max-height:36px;overflow:hidden;padding:0}.wrapper .header .header-info-wrapper{flex-direction:column;flex-wrap:nowrap;width:100%;min-width:0;padding:0;margin:0 8px}.wrapper .header .header-info-wrapper .title{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:1.125em;font-weight:700}.wrapper .header .header-info-wrapper .subtitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wrapper .header .header-info-wrapper .connection-status{font-weight:bold;font-size:10px;justify-content:center;padding:0;margin:0;text-transform:uppercase;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wrapper .header .header-gap{flex:auto}.wrapper .header-actions{flex:1 0 auto;justify-content:flex-end;flex-direction:inherit}.wrapper .header-button svg>path{fill:var(--color-header-button-fill)}.wrapper .header-button:not(:disabled):hover,.wrapper .header-button:not(:disabled):focus{background-color:var(--color-header-button-background-hover)}.wrapper .header-button:not(:disabled):hover svg>path,.wrapper .header-button:not(:disabled):focus svg>path{fill:var(--color-header-button-fill-hover)}.wrapper .conversation{display:flex;flex-direction:column-reverse;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column-reverse;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth;width:100%;padding:16px}.wrapper .conversation .conversation-pane .message-date,.wrapper .conversation .conversation-pane .relative-timestamp{font-size:12px;margin:8px 0 8px;color:var(--color-timestamp);text-align:start}.wrapper .conversation .conversation-pane .message-date.right,.wrapper .conversation .conversation-pane .relative-timestamp.right{text-align:end}.wrapper .conversation .conversation-pane.bot-icon .message.card-message-horizontal{margin-inline-start:-56px}.wrapper .conversation .conversation-pane.bot-icon .message.card-message-horizontal .message-header,.wrapper .conversation .conversation-pane.bot-icon .message.card-message-horizontal .message-footer,.wrapper .conversation .conversation-pane.bot-icon .message.card-message-horizontal .message-global-actions{margin-inline-start:56px}.wrapper .conversation .conversation-pane.bot-icon .message.card-message-horizontal .card-message-content .card-message-cards{padding-inline-start:56px}.wrapper .conversation .conversation-pane.bot-icon .relative-timestamp.left{margin-inline-start:40px}.wrapper .conversation .conversation-pane.user-icon .relative-timestamp.right{margin-inline-end:40px}.wrapper .conversation .conversation-pane.bot-icon .message-block .messages-wrapper,.wrapper .conversation .conversation-pane.user-icon .message-block .messages-wrapper{max-width:calc(0.9 * (100% - 40px))}.wrapper .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-global-actions,.wrapper .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message.card-message-horizontal .message-global-actions{max-width:calc(0.9 * (100% - 72px))}.wrapper .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper{max-width:calc(0.9 * (100% - 80px))}.wrapper .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-global-actions{max-width:calc(0.9 * (100% - 112px))}.wrapper .timestamp-header{text-align:center;font-size:12px;font-weight:700;color:var(--color-timestamp);margin:16px 0}.wrapper .hr{margin:24px 0;font-size:12px;color:var(--color-horizontal-rule-background)}.wrapper .hr:before{content:"";background-color:var(--color-horizontal-rule-background);height:1px;flex-grow:1;margin-right:10px}.wrapper .hr:after{content:"";background-color:var(--color-horizontal-rule-background);height:1px;flex-grow:1;margin-left:10px}.wrapper .card-actions,.wrapper .form-actions,.wrapper .message-actions,.wrapper .message-global-actions{margin-top:6px;display:flex;align-items:flex-start;justify-content:flex-start;flex-wrap:wrap}.wrapper .card-actions.form-message-actions-col,.wrapper .form-actions.form-message-actions-col,.wrapper .message-actions.form-message-actions-col,.wrapper .message-global-actions.form-message-actions-col{flex-basis:100%;max-width:100%}.wrapper .card-actions button:last-child,.wrapper .form-actions button:last-child,.wrapper .message-actions button:last-child,.wrapper .message-global-actions button:last-child{margin-bottom:0}.wrapper .card-actions:not(.col) .action-postback,.wrapper .form-actions:not(.col) .action-postback,.wrapper .message-actions:not(.col) .action-postback,.wrapper .message-global-actions:not(.col) .action-postback{margin-right:8px}.wrapper .card-actions:not(.col) .action-postback:last-child,.wrapper .form-actions:not(.col) .action-postback:last-child,.wrapper .message-actions:not(.col) .action-postback:last-child,.wrapper .message-global-actions:not(.col) .action-postback:last-child{margin-right:0}.wrapper .action-postback{background:var(--color-actions-background);color:var(--color-actions-text);border-color:var(--color-actions-border);text-align:left}.wrapper .action-postback:not(:disabled):hover{color:var(--color-actions-text-hover);background-color:var(--color-actions-background-hover)}.wrapper .action-postback:not(:disabled):hover svg>path{fill:var(--color-actions-text-hover)}.wrapper .action-postback:not(:disabled):focus,.wrapper .action-postback:not(:disabled):active{background-color:var(--color-actions-background-focus);color:var(--color-actions-text-focus)}.wrapper .action-postback:not(:disabled):focus svg>path,.wrapper .action-postback:not(:disabled):active svg>path{fill:var(--color-actions-text-focus)}.wrapper .form-actions .action-postback{background:transparent;color:var(--color-form-actions-text);border-color:var(--color-form-actions-border)}.wrapper .form-actions .action-postback:not(:disabled):hover,.wrapper .form-actions .action-postback:not(:disabled):focus,.wrapper .form-actions .action-postback:not(:disabled):active{color:var(--color-form-actions-text);background-color:var(--color-form-actions-background-hover)}.wrapper .form-actions .action-postback:not(:disabled):hover svg>path,.wrapper .form-actions .action-postback:not(:disabled):focus svg>path,.wrapper .form-actions .action-postback:not(:disabled):active svg>path{fill:var(--color-form-actions-text)}.wrapper .message-global-actions{margin-top:8px}.wrapper .message-global-actions.stars{display:block}.wrapper .message-global-actions button{background:var(--color-global-actions-background);color:var(--color-global-actions-text);border-color:var(--color-global-actions-border)}.wrapper .message-global-actions button:not(:disabled):hover{background-color:var(--color-global-actions-background-hover);color:var(--color-global-actions-text-hover)}.wrapper .message-global-actions button:not(:disabled):hover svg>path{fill:var(--color-global-actions-text-hover)}.wrapper .message-global-actions button:not(:disabled):focus,.wrapper .message-global-actions button:not(:disabled):active{background-color:var(--color-global-actions-background-focus);color:var(--color-global-actions-text-focus)}.wrapper .message-global-actions button:not(:disabled):focus svg>path,.wrapper .message-global-actions button:not(:disabled):active svg>path{fill:var(--color-global-actions-text-focus)}.wrapper .message-bubble{position:relative;display:flex;flex-direction:column;align-items:flex-start;margin:0;padding:6px 16px;color:var(--color-bot-text);background:var(--color-bot-message-background);overflow:hidden;min-height:32px;line-height:20px;overflow-wrap:break-word;max-width:100%;border-radius:2px 10px 10px 2px;margin-top:2px}.wrapper .message-bubble>*{width:100%}.wrapper .message-bubble.before-card{border-radius:2px 10px 10px 10px}.wrapper .message-bubble .youtube-wrapper{margin:-6px -16px -11px}.wrapper .message-bubble .ovh-wrapper{width:100%;max-width:100%}.wrapper .message-bubble.error{background-color:var(--color-error-message-background);color:var(--color-error-text);border:1px dashed var(--color-error-border)}.wrapper .message-bubble.error .message-icon path{fill:var(--color-error-title)}.wrapper .message-bubble.error .message-title{color:var(--color-error-title)}.wrapper .message-bubble .message-with-icon{display:flex;align-items:flex-start;justify-content:space-between}.wrapper .message-bubble .message-with-icon .message-icon{width:24px;height:24px;align-items:center;margin-inline-end:16px}.wrapper .message-bubble .message-with-icon .message-text{word-break:break-word}.wrapper .message-bubble.message-header{margin-bottom:2px}.wrapper .message-bubble.message-footer{margin-top:2px}.wrapper .messages-wrapper{max-width:90%;align-items:flex-start}.wrapper .messages-wrapper .agent-name{position:relative;bottom:3px;max-width:calc(100%/0.9);height:16px;font-size:12px;line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--color-agent-name)}.wrapper .messages-wrapper .screen-reader-only{height:1px;left:-20000px;overflow:hidden;position:absolute;top:auto;width:1px}.wrapper .messages-wrapper .message-list{width:100%;align-items:flex-start}.wrapper .messages-wrapper .message-list .message{width:100%;white-space:pre-wrap}.wrapper .messages-wrapper .message-list .message a{color:var(--color-links)}.wrapper .messages-wrapper .message-list .message button.anchor-btn{padding:0}.wrapper .messages-wrapper .message-list .message button.anchor-btn a{display:block;text-decoration:inherit;color:inherit;padding:10px 20px}.wrapper .messages-wrapper .message-list .message button:last-child{margin-bottom:0}.wrapper .messages-wrapper .message-list .message .message-wrapper{display:flex;align-items:flex-start;flex-direction:column;width:100%;max-width:100%}.wrapper .messages-wrapper .message-list .message:first-child .message-bubble:not(.message-footer){margin-top:0}.wrapper .messages-wrapper .message-list .message:first-child .card-message-content:first-child .card-message-cards{margin-top:0}.wrapper .messages-wrapper .message-list .message:last-child .message-bubble:last-child{border-radius:2px 10px 10px 10px}.wrapper .messages-wrapper .message-list .message:last-child .card-message-content:last-child .card-message-cards{margin-bottom:-8px}.wrapper .messages-wrapper .message-list .message.card-message-horizontal{margin-inline-start:-16px;width:100vw}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .message-header,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .message-footer,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .message-global-actions{margin-inline-start:16px;max-width:calc(0.9 * (100% - 32px))}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .message-header{border-radius:2px 10px 10px 10px}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .card-message-cards{flex-direction:row;overflow-x:auto;padding:0 56px 0 16px}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .card{margin-inline-end:8px}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next-wrapper,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .prev-wrapper{position:absolute;height:100%;top:0;width:52px;z-index:1}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next-wrapper{right:0;background:linear-gradient(90deg, rgba(255, 255, 255, 0), var(--color-conversation-background) 60%)}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .prev-wrapper{left:0;background:linear-gradient(90deg, var(--color-conversation-background) 40%, rgba(255, 255, 255, 0))}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .previous{position:absolute;z-index:10;width:36px;height:36px;left:8px;padding:0;overflow:hidden;background-color:var(--color-card-nav-button);border:none;box-shadow:0px 2px 4px rgba(0,0,0,.1);top:calc(50% - 18px);justify-content:center}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next:hover,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .previous:hover{background-color:var(--color-card-nav-button-hover)}.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next:focus,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .next:active,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .previous:focus,.wrapper .messages-wrapper .message-list .message.card-message-horizontal .previous:active{background-color:var(--color-card-nav-button-focus)}.wrapper .message-block{justify-content:flex-start;align-items:flex-start;margin-bottom:8px}.wrapper .message-block.right{flex-direction:row-reverse}.wrapper .message-block.right .icon-wrapper{margin:unset;margin-inline-start:8px}.wrapper .message-block.right .messages-wrapper{align-items:flex-end}.wrapper .message-block.right .messages-wrapper .message a{color:var(--color-user-links)}.wrapper .message-block.right .messages-wrapper .message .message-wrapper{align-items:flex-end}.wrapper .message-block.right .messages-wrapper .message .message-bubble{border-radius:10px 2px 2px 10px}.wrapper .message-block.right .messages-wrapper .message .message-bubble:not(.error){color:var(--color-user-text);background:var(--color-user-message-background)}.wrapper .message-block.right .messages-wrapper .message:last-child .message-bubble:last-child{border-radius:10px 2px 10px 10px}.wrapper .message-block.right .message-date{text-align:right}.wrapper .icon-wrapper{margin-inline-end:8px;width:32px;min-width:32px;height:32px;border-radius:4px;overflow:hidden;z-index:1}.wrapper .icon-wrapper.agent-avatar{background:var(--color-agent-avatar-background);margin-top:16px}.wrapper .icon-wrapper .message-icon{height:32px;max-height:32px;max-width:32px;width:32px;color:var(--color-timestamp);overflow:hidden;text-overflow:ellipsis}.wrapper .icon-wrapper .agent-icon{position:relative;width:20px;height:20px;left:6px;top:6px;font-weight:700;font-size:16px;line-height:20px;text-align:center;color:var(--color-agent-initials)}.wrapper .attachment{width:100%}.wrapper .attachment .attachment-placeholder{background-color:var(--color-attachment-placeholder);max-width:calc(100% + 32px);min-width:228px;min-height:88px;max-height:230px;margin:-6px -16px 0;justify-content:center;overflow:hidden}.wrapper .attachment .attachment-placeholder>*{max-width:100%}.wrapper .attachment .attachment-placeholder .attachment-icon{height:48px;width:48px}.wrapper .attachment .attachment-placeholder .attachment-icon svg{height:48px;width:48px}.wrapper .attachment .attachment-placeholder .attachment-icon img{width:100%}.wrapper .attachment .attachment-placeholder .attachment-audio{height:50px;width:100%}.wrapper .attachment .attachment-placeholder .attachment-audio::-webkit-media-controls-enclosure{background-color:transparent}.wrapper .attachment .attachment-footer{background-color:var(--color-attachment-footer);color:var(--color-attachment-text);margin:0 -16px -6px;height:50px;padding:16px}.wrapper .attachment .attachment-footer.with-actions{border-bottom:thin solid rgba(22,21,19,.1);margin-bottom:6px}.wrapper .attachment .attachment-footer .attachment-title{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wrapper .card{width:252px;border-radius:6px;padding:16px;margin-block-end:8px;justify-content:flex-start;flex-shrink:0;color:var(--color-bot-text);background:var(--color-card-background);overflow:hidden}.wrapper .card .card-image{display:block;width:calc(100% + 32px);margin:-16px -16px 10px;min-height:88px;background-color:var(--color-attachment-placeholder)}.wrapper .card .card-title{line-height:20px;margin:0 0 4px;font-weight:700}.wrapper .card .card-description{margin-bottom:16px;color:var(--color-text-light)}.wrapper .card-message-content{width:100%;position:relative}.wrapper .card-message-content .card-message-cards{width:100%;align-items:stretch;display:flex;scroll-behavior:smooth;overflow-x:visible;flex-direction:column;margin:8px 0 0;scrollbar-width:none}.wrapper .card-message-content .card-message-cards::-webkit-scrollbar{display:none}.wrapper .message-bubble-tabular-message{width:calc(1.11 * 100%);max-width:unset;border-radius:0 8px 8px 8px;padding:0;overflow:hidden;background-color:var(--color-table-background);color:var(--color-table-text);border:1px solid var(--color-table-header-background)}.wrapper .message-bubble-tabular-message~.message-footer{margin-top:8px}.wrapper .form-message-field,.wrapper .table-message-heading,.wrapper .table-message-item{overflow:hidden;overflow-wrap:break-word;word-break:break-word}.wrapper .table-message-wrapper{overflow:auto;background-color:#fff}.wrapper .table-message-wrapper .table-message{min-width:100%;max-width:200%;border-collapse:collapse}.wrapper .table-message-wrapper .table-message .table-message-headings{align-items:center;background-color:var(--color-table-header-background);display:flex}.wrapper .table-message-wrapper .table-message .table-message-headings .table-message-heading{color:rgba(22,21,19,.65);font-size:12px;font-weight:600;line-height:16px;padding:16px;min-width:120px}.wrapper .table-message-wrapper .table-message .table-message-row{border-top:1px solid var(--color-table-separator);display:flex;align-items:center}.wrapper .table-message-wrapper .table-message .table-message-row .table-message-item{color:var(--color-table-text);font-size:16px;line-height:20px;min-width:120px;padding:10px 16px}.wrapper .form-message-header{align-items:center;background-color:var(--color-table-header-background);color:var(--color-table-text);display:flex;font-weight:700;line-height:20px;padding:16px;text-align:start}.wrapper .form-message-item{display:flex;flex-flow:row wrap;justify-content:space-between;padding:16px 16px}.wrapper .form-message-item.with-border{border-bottom:1px solid var(--color-table-separator)}.wrapper .form-message-item .form-message-key{color:rgba(22,21,19,.65);font-size:12px;line-height:16px}.wrapper .form-message-item .form-message-field{margin-bottom:16px}.wrapper .form-message-item .form-message-field.form-message-field-col-1{flex-basis:100%;max-width:100%}.wrapper .form-message-item .form-message-field.form-message-field-col-2{flex-basis:calc(50% - 12px);max-width:calc(50% - 12px)}.wrapper .tableform-message .table-message-row{cursor:pointer}.wrapper .tableform-message .table-message-row:hover{background-color:var(--color-row-item-background-hover)}.wrapper .tableform-message .table-message-row button:hover,.wrapper .tableform-message .table-message-row button:active,.wrapper .tableform-message .table-message-row button:focus{background-color:unset}.wrapper .tableform-message .table-message-headings .table-message-heading:last-child,.wrapper .tableform-message .table-message-row .table-message-item:last-child{min-width:unset;padding:0}.wrapper .tableform-message .table-message-headings .table-message-heading:last-child button,.wrapper .tableform-message .table-message-row .table-message-item:last-child button{margin:0 2px;transition:transform .25s ease-in-out}.wrapper .tableform-message .table-message-headings .table-message-heading:last-child button.rotate-180,.wrapper .tableform-message .table-message-row .table-message-item:last-child button.rotate-180{transform:rotate3d(0, 0, 1, 180deg)}.wrapper .tableform-message .form-message-item{background-color:#fbf9f8;margin:0;padding:16px;transition:all .25s ease-in-out;border-bottom:none}.wrapper .tableform-message .form-message-item.none{display:none}.wrapper .tableform-message .form-message-item:last-child{border-top:1px solid var(--color-table-bottom)}.wrapper .results-page-status{align-items:center;background-color:#fff;color:#161513;display:flex;flex-direction:row;font-size:13.75px;justify-content:flex-end;line-height:16px;padding:12px 16px;border-top:1px solid var(--color-table-separator)}.wrapper .footer{max-width:100%;padding:0;background-color:var(--color-footer-background);z-index:3;box-shadow:0px -1px 4px 0px #0000001a;border-top:1px solid rgba(22,21,19,.1)}.wrapper .footer .footer-mode-keyboard{min-height:44px;margin:5px;background-color:var(--color-input-background);color:var(--color-input-text);border:1px solid var(--color-input-border);border-radius:6px}.wrapper .footer .footer-mode-voice{height:60px;padding:14px 0;background:var(--color-visualizer-container-background);justify-content:center}.wrapper .footer .footer-mode-voice .footer-visualizer-wrapper{max-width:296px;height:32px}.wrapper .footer .audio-text-wrapper{width:100%}.wrapper .footer .audio-text-wrapper .audio-text{flex-grow:1;height:34px;margin:0px 5px;border:none;outline:none;font-size:1em;background-color:transparent;color:var(--color-recognition-view-text)}.wrapper .footer.mode-keyboard .button-switch-kbd{display:none}.wrapper .footer.mode-keyboard .footer-mode-voice{display:none}.wrapper .footer.mode-voice .button-switch-voice{display:none}.wrapper .user-input{flex-grow:1;min-height:44px;padding:10px;margin:0;font-size:1em;font-family:inherit;line-height:24px;outline:none;resize:none;border:none;border-radius:6px;background-color:transparent}.wrapper .footer-actions{padding-inline-end:4px}.wrapper .footer-button.button-send{background-color:var(--color-footer-button-fill);border-radius:50%}.wrapper .footer-button.button-send svg>path{fill:var(--color-input-background)}.wrapper .footer-button.button-send:not(:disabled):hover{background-color:var(--color-footer-button-fill-hover)}.wrapper .footer-button.button-send:not(:disabled):hover svg>path{fill:var(--color-input-background)}.wrapper .footer-button svg>path{fill:var(--color-footer-button-fill)}.wrapper .footer-button:not(:disabled):hover,.wrapper .footer-button:not(:disabled):focus{background-color:var(--color-footer-button-background-hover)}.wrapper .footer-button:not(:disabled):hover svg>path,.wrapper .footer-button:not(:disabled):focus svg>path{fill:var(--color-footer-button-fill-hover)}.wrapper .autocomplete-items{position:absolute;bottom:56px;width:100%;max-height:calc(100% - 56px);overflow-y:auto;background-color:var(--color-input-background);box-shadow:0px -1px 4px 0px #0000001a;padding:8px 0}.wrapper .autocomplete-items>div{min-height:40px;padding:8px 16px;cursor:pointer}.wrapper .autocomplete-items>div:hover,.wrapper .autocomplete-items>div.autocomplete-active{background-color:var(--color-card-nav-button-hover)}.wrapper .autocomplete-items>div strong{font-weight:700}.wrapper .dialog-wrapper{position:absolute;top:0;left:0;right:0;width:100%;height:100%}.wrapper .dialog-wrapper .prompt-banner-background{position:fixed;background:rgba(0,0,0,.2);height:100%;width:100%;z-index:5}.wrapper .dialog-wrapper .prompt-banner{align-items:center;box-shadow:rgba(0,0,0,.16) 0px 4px 8px 0px;border-radius:6px;display:flex;flex-direction:row;position:absolute;max-width:450px;min-height:48px;max-height:60%;top:30%;left:0;right:0;padding:8px 16px;margin:8px auto;width:calc(100% - 16px);z-index:5;animation:banner-in .2s cubic-bezier(0.22, 0.45, 0.42, 0.92) both;background-color:var(--color-popup-background);flex-direction:column;align-items:flex-start;overflow-y:auto}.wrapper .dialog-wrapper .prompt-banner.prompt-banner-out{animation:banner-out .2s cubic-bezier(0.5, 0.07, 0.68, 0.48) both}.wrapper .dialog-wrapper .prompt-banner .prompt-banner-main-content{margin:16px 0;align-items:flex-start}.wrapper .dialog-wrapper .prompt-banner .prompt-banner-main-content .prompt-banner-icon{margin:4px 16px 0 0}.wrapper .dialog-wrapper .prompt-banner .prompt-banner-main-content .prompt-banner-text{margin:0 28px 0 0;font-size:18px;font-weight:bold;color:var(--color-popup-text)}.wrapper .dialog-wrapper .prompt-banner .prompt-banner-main-content .prompt-banner-description{color:var(--color-popup-text);opacity:.6;font-size:13px;margin:8px 28px 0 0}.wrapper .dialog-wrapper .prompt-banner .prompt-banner-close-button{position:absolute;border:none;right:16px}.wrapper .dialog-wrapper .prompt-banner .action-wrapper{width:100%;margin:16px 0 6px}.wrapper .dialog-wrapper .prompt-banner .action-wrapper .popup-action{background-color:var(--color-popup-button-background);border-color:var(--color-popup-button-text);color:var(--color-popup-button-text);border-style:solid;margin:0;height:34px;justify-content:center;width:49%}.wrapper .dialog-wrapper .prompt-banner .action-wrapper .popup-action:hover{background-color:var(--color-footer-button-background-hover)}.wrapper .dialog-wrapper .prompt-banner .action-wrapper .popup-action:last-child{margin:0}.wrapper .dialog-wrapper .prompt-banner .action-wrapper .popup-action.filled{background-color:var(--color-popup-button-text);color:var(--color-popup-button-background)}.wrapper .dialog-wrapper .prompt-banner .action-wrapper .popup-action.filled:hover{opacity:.9}.wrapper .dialog-wrapper.end-conversation-prompt .prompt-banner-close-button{display:none}.wrapper.embedded .open{width:100%;height:100%}.wrapper.embedded .open .widget{border-radius:0;width:100%;height:100%;position:inherit;box-shadow:none;max-height:unset}@media(min-width: 1024px){.wrapper.embedded .conversation .conversation-pane .message-bubble{padding:16px 24px}.wrapper.embedded .conversation .conversation-pane .message-bubble .attachment .attachment-placeholder{margin:-16px -24px 0;max-width:calc(100% + 48px)}.wrapper.embedded .conversation .conversation-pane .message-bubble .attachment .attachment-footer{margin:0 -24px -16px}.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper{max-width:780px}.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message-header,.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message-footer,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message-header,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message-footer{max-width:780px}.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper{max-width:780px}.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer{max-width:780px}.wrapper.embedded button:not(.icon){height:44px}}@media(min-width: 900px)and (max-width: 1023px){.wrapper.embedded .conversation .conversation-pane .message-bubble{padding:8px 16px}.wrapper.embedded .conversation .conversation-pane .message-bubble .attachment .attachment-placeholder{margin:-8px -16px 0}.wrapper.embedded .conversation .conversation-pane .message-bubble .attachment .attachment-footer{margin:0 -16px -8px}.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper{max-width:680px}.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.user-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer{max-width:680px}.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper{max-width:680px}.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-bubble,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-bubble{padding:16px 24px}.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.bot-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-header,.wrapper.embedded .conversation .conversation-pane.user-icon.bot-icon .message-block .messages-wrapper .message.card-message-horizontal .message-footer{max-width:680px}.wrapper.embedded button:not(.icon){height:44px}}.wrapper .full-screen-modal{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000000;background-color:rgba(0,0,0,.8)}.wrapper .modal-header{background:linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);color:#fff;display:flex;justify-content:space-between;position:relative;padding:10px 20px;z-index:1000001}.wrapper .modal-header .close-btn{border:none;background:transparent;cursor:pointer}.wrapper .full-screen-image{position:absolute;max-width:100vw;max-height:100vh;margin:auto;top:0;bottom:0;left:0;right:0}.wrapper .typing-cue-wrapper{width:32px;margin:auto}.wrapper .typing-cue-wrapper .typing-cue{position:relative;left:0;right:0;margin:auto;width:8px;height:8px;border-radius:50%;background-color:var(--color-typing-indicator);animation:typing-cue 1550ms infinite linear alternate;animation-delay:250ms;opacity:.1}.wrapper .typing-cue-wrapper .typing-cue::before,.wrapper .typing-cue-wrapper .typing-cue::after{content:"";display:inline-block;position:absolute;width:8px;height:8px;border-radius:50%;background-color:var(--color-typing-indicator);animation:typing-cue 1550ms infinite linear alternate;opacity:.1}.wrapper .typing-cue-wrapper .typing-cue::before{left:-12px;animation-delay:0s}.wrapper .typing-cue-wrapper .typing-cue::after{left:12px;animation-delay:500ms}.wrapper .hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.wrapper .rating-root{display:flex}.wrapper [dir=rtl] .rating-root{flex-direction:row-reverse}.wrapper .rating-wrapper{display:flex;margin-top:8px}.wrapper [dir=rtl] .rating-wrapper{flex-direction:row-reverse}.wrapper .rating-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.wrapper .star-label{background-color:transparent;border:0;cursor:pointer;padding:0}.wrapper .star-label>svg>path{fill:var(--color-rating-star)}.wrapper .star-input.active+label>svg>path{fill:var(--color-rating-star-fill)}.wrapper .star-input:disabled+.star-label{cursor:not-allowed;filter:brightness(0.8)}.wrapper .rating-star-icon{height:32px;width:32px}.wrapper.expanded .widget{animation:scale-in-br .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}.wrapper.expanded:not(.drag) .button{animation:scale-out-center .25s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards}.wrapper.collapsed .widget{animation:scale-out-br .25s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards}.wrapper.collapsed .notification-badge{background-color:var(--color-notification-badge-background);color:var(--color-notification-badge-text);right:-5px;top:-5px;align-items:center;border-radius:24px;display:flex;font-size:14px;height:24px;justify-content:center;position:absolute;text-align:center;width:32px}.wrapper.collapsed:not(.drag) .button{animation:scale-in-center .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}.wrapper.pos-left .widget{right:unset;left:calc(var(--position-left) * -1);max-width:100vw}.wrapper.pos-left.expanded .widget{animation:scale-in-bl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}.wrapper.pos-left.collapsed .widget{animation:scale-out-bl .25s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards}.wrapper .ellipsis{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wrapper .popup{position:absolute;background-color:var(--color-popup-background);color:var(--color-popup-text);min-width:140px;max-height:calc(100% - 128px);display:none;padding:4px 0;border-radius:6px;box-shadow:rgba(0,0,0,.16) 0px 4px 8px 0px;overflow-y:auto;z-index:5}.wrapper .popup li{display:flex;align-items:center;height:48px;margin:4px 0;cursor:pointer;overflow:hidden;color:var(--color-popup-button-text)}.wrapper .popup li svg>path{fill:var(--color-popup-text)}.wrapper .popup li#action-menu-option-lang{border-top:1px solid var(--color-popup-horizontal-rule)}.wrapper .popup li.disable{pointer-events:none;cursor:not-allowed;opacity:.5}.wrapper .popup li:hover,.wrapper .popup li:focus,.wrapper .popup li.active{background-color:var(--color-popup-item-background-hover)}.wrapper .popup li .icon{margin-inline-start:16px;height:20px;width:20px}.wrapper .popup li .text{padding:0 16px 0 16px}.wrapper .popup.expand{display:block;-webkit-animation:scale-in-br .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both;animation:scale-in-br .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}.wrapper .popup.action-menu,.wrapper .popup.language-selection-menu{top:50px;bottom:unset}.wrapper .popup.action-menu.expand,.wrapper .popup.language-selection-menu.expand{display:block;-webkit-animation:scale-in-tr .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both;animation:scale-in-tr .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}.wrapper .popup.language-selection-menu{max-height:calc(100% - 280px)}.wrapper .popup.share-popup-list{position:fixed;bottom:50px;left:unset}.wrapper .spinner{height:48px;width:48px}.wrapper .spinner svg{animation-duration:750ms;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.wrapper .spinner svg circle{fill:transparent;stroke:var(--color-user-text);stroke-width:2px;stroke-dasharray:128px;stroke-dashoffset:82px}.wrapper .webview-container{position:absolute;width:100%;height:80%;bottom:0;box-shadow:0px -4px 32px rgba(0,0,0,.1);z-index:10}.wrapper .webview-container .webview-header svg{fill:var(--color-actions-text)}.wrapper .webview-container .webview-header button{color:var(--color-actions-text)}.wrapper .webview-container .spinner{position:absolute;margin:auto;left:0;right:0;top:40%}.wrapper .webview-container iframe{width:100%;height:100%;background:var(--color-conversation-background);border:none}.wrapper .webview-container .webview-error{position:absolute;bottom:0;background:var(--color-popup-background);width:calc(100% - 32px);margin:10px 16px;padding:6px 16px;border-radius:6px;display:flex;align-items:center;box-shadow:0px -4px 32px rgba(0,0,0,.1)}.wrapper .webview-container .webview-error .webview-error-button-close{border:none}.wrapper .webview-container.webview-container-close{animation:oda-chat-webview-slide-out-bottom .4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both}.wrapper .webview-container.webview-container-open{animation:oda-chat-webview-slide-in-bottom .4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.image-preview-wrapper{background:rgba(0,0,0,.8);height:100%;position:fixed;top:0;left:0;width:100%;z-index:10000}.image-preview-wrapper .image-preview-header{align-items:center;background:linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);color:#fff;display:flex;justify-content:space-between;position:relative;padding:10px 20px;z-index:1000001}.image-preview-wrapper .image-preview-header .image-preview-close{background:transparent;border:none;cursor:pointer;height:36px;width:36px}.image-preview-wrapper .image-preview-header .image-preview-close .image-preview-close-icon{fill:#fff;height:100%;width:100%}.image-preview-wrapper .image-preview{bottom:0;left:0;margin:auto;max-height:100vh;max-width:100vw;position:absolute;right:0;top:0}.arrow-icon{margin-inline-end:2px;width:32px;height:32px;display:flex;align-items:center;flex-shrink:0}@media screen and (min-width: 426px){.wrapper .widget{width:var(--width-full-screen);height:620px;bottom:0;right:0}.wrapper .messages-wrapper .message-list .message.card-message-horizontal{width:var(--width-full-screen)}.wrapper.pos-left .widget{left:0}.wrapper:not(.embedded) .widget{max-width:calc(100vw - var(--position-right))}.wrapper:not(.embedded).pos-left .widget{max-width:calc(100vw - var(--position-left))}}@media(prefers-reduced-motion){.open{animation:none}.close{animation:none}}[dir=rtl] *:not(.card-message-horizontal .message-wrapper *){direction:rtl}[dir=rtl] .card-message-horizontal .message-wrapper .card{direction:rtl}[dir=rtl] .card-message-horizontal .message-wrapper .card *{direction:rtl}[dir=rtl] .wrapper{text-align:right}[dir=rtl] .wrapper .widget.open{animation:scale-in-bl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}[dir=rtl] .wrapper .widget.close{animation:scale-out-bl .25s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards}[dir=rtl] .wrapper .message-bubble{border-radius:10px 2px 2px 10px}[dir=rtl] .wrapper .message-block .message:last-child .message-bubble:last-child{border-radius:10px 2px 10px 10px}[dir=rtl] .wrapper .message-block.right .messages-wrapper .message .message-bubble{border-radius:2px 10px 10px 2px}[dir=rtl] .wrapper .message-block.right .messages-wrapper .message:last-child .message-bubble:last-child{border-radius:2px 10px 10px 10px}[dir=rtl] .wrapper .button{left:0;right:unset}[dir=rtl] .wrapper .popup.expand{-webkit-animation:scale-in-bl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both;animation:scale-in-bl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}[dir=rtl] .wrapper .popup.action-menu.expand,[dir=rtl] .wrapper .popup.language-selection-menu.expand{-webkit-animation:scale-in-tl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both;animation:scale-in-tl .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s both}'},301: function (e, t, s) {var i,n,o
          s.d(t, {a: function () {return o},b: function () {return c},c: function () {return m},d: function () {return i},e: function () {return O},f: function () {return D},g: function () {return P},h: function () {return R},i: function () {return B},j: function () {return L},k: function () {return M},l: function () {return z}}), function (e) {e.Return = 'Enter', e.Esc = 'Escape', e.Space = 'Space', e.Left = 'ArrowLeft', e.Up = 'ArrowUp', e.Right = 'ArrowRight', e.Down = 'ArrowDown', e.Tab = 'Tab', e.PageDown = 'PageDown', e.PageUp = 'PageUp', e.Home = 'Home', e.End = 'End', e.Backspace = 'Backspace'}(i || (i = {})), function (e) {e.Audio = 'audio', e.File = 'file', e.Location = 'location', e.Visual = 'visual'}(n || (n = {})), function (e) {e.AuthExpiredToken = 'AuthExpiredToken', e.AuthNoToken = 'AuthNoToken', e.AuthNoChannelId = 'AuthNochannelId', e.AuthNoUserId = 'AuthNouserId', e.AuthNoExp = 'AuthNoexp', e.AuthNoIat = 'AuthNoiat', e.AuthInvalidChannelId = 'AuthInvalidchannelId', e.AuthInvalidUserId = 'AuthInvaliduserId', e.AuthInvalidExp = 'AuthInvalidexp', e.AuthInvalidIat = 'AuthInvalidiat', e.AuthEmptyChannelIdClaim = 'AuthInvalidchannelId', e.AuthEmptyUserIdClaim = 'AuthInvaliduserId', e.AuthNegativeExp = 'AuthNegativeexp', e.AuthNegativeIat = 'AuthNegativeiat', e.AuthExpLessThanIat = 'AuthExpLessThanIat'}(o || (o = {}))
          class a {
            constructor (e) {this.token = e;const t = this.token.split('.')
              this.payload = JSON.parse(atob(t[1]))}
            getClaim (e) {return this.payload[e]}
          }
          const r = Promise
          class c {
            static getInstance () {return this.service || (this.service = new c), this.service}
            get () {return this.jws && p(this.jws) ? r.resolve(this.jws) : new r(((e, t) => {
                r.resolve(this.fetch()).then((s => {
                  this.jws = new a(s);try {if (function (e) {e || g(o.AuthNoToken);const t = 'iat',s = e.getClaim(t)
                        u(t, h, s);const i = e.getClaim(d)
                        u(d, h, i), i <= s && g(o.AuthExpLessThanIat);const n = 'channelId',a = e.getClaim(n)
                        u(n, l, a);const r = 'userId',c = e.getClaim(r)
                        u(r, l, c)}(this.jws), p(this.jws))return void e(this.jws);g(o.AuthExpiredToken)} catch(e) {t(e) }}))}))}
            reset () {this.jws = void 0}
            setFetch (e) {if (!L(e))throw new Error("'generateAuthToken' is not a function. Create a function that returns a Promise that resolves to a new JWT when called.");this.fetch = e, this.reset()}
          }
          const l = 'string',h = 'number',d = 'exp'
          function p (e) {const t = Math.floor((Date.now() + 2e4) / 1e3)
            return e.getClaim(d) > t}function u (e, t, s) {null == s && g(`AuthNo${e}`), typeof s !== t && g(`AuthInvalid${e}`), 'number' == typeof s ? s <= 0 && g(`AuthNegative${e}`) : s.length || g(`AuthEmpty${e}`)}function g (e) {throw Error(e)}
          class m {
            constructor () {this.promise = new Promise(((e, t) => {
                this.resolve = e, this.reject = t})), Object.freeze(this)}
          }
          var f = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,b = /\[([^]*?)\]/gm
          function v (e, t) { for (var s = [],i = 0,n = e.length;i < n;i++)s.push(e[i].substr(0, t));return s}var w = function (e) {return function (t, s) {var i = s[e].map((function (e) {return e.toLowerCase()})),n = i.indexOf(t.toLowerCase())
              return n > -1 ? n : null}}
          function x (e) { for (var t = [],s = 1;s < arguments.length;s++)t[s - 1] = arguments[s]; for (var i = 0,n = t;i < n.length;i++) {var o = n[i]
              for (var a in o)e[a] = o[a]}return e}var C = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],S = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],y = v(S, 3),_ = {dayNamesShort: v(C, 3),dayNames: C,monthNamesShort: y,monthNames: S,amPm: ['am', 'pm'],DoFn: function (e) {return e + ['th', 'st', 'nd', 'rd'][e % 10 > 3 ? 0 : (e - e % 10 != 10 ? 1 : 0) * e % 10]}},T = x({}, _),k = function (e, t) { for (void 0 === t && (t = 2), e = String(e);e.length < t;)e = '0' + e;return e},I = {D: function (e) {return String(e.getDate())},DD: function (e) {return k(e.getDate())},Do: function (e, t) {return t.DoFn(e.getDate())},d: function (e) {return String(e.getDay())},dd: function (e) {return k(e.getDay())},ddd: function (e, t) {return t.dayNamesShort[e.getDay()]},dddd: function (e, t) {return t.dayNames[e.getDay()]},M: function (e) {return String(e.getMonth() + 1)},MM: function (e) {return k(e.getMonth() + 1)},MMM: function (e, t) {return t.monthNamesShort[e.getMonth()]},MMMM: function (e, t) {return t.monthNames[e.getMonth()]},YY: function (e) {return k(String(e.getFullYear()), 4).substr(2)},YYYY: function (e) {return k(e.getFullYear(), 4)},h: function (e) {return String(e.getHours() % 12 || 12)},hh: function (e) {return k(e.getHours() % 12 || 12)},H: function (e) {return String(e.getHours())},HH: function (e) {return k(e.getHours())},m: function (e) {return String(e.getMinutes())},mm: function (e) {return k(e.getMinutes())},s: function (e) {return String(e.getSeconds())},ss: function (e) {return k(e.getSeconds())},S: function (e) {return String(Math.round(e.getMilliseconds() / 100))},SS: function (e) {return k(Math.round(e.getMilliseconds() / 10), 2)},SSS: function (e) {return k(e.getMilliseconds(), 3)},a: function (e, t) {return e.getHours() < 12 ? t.amPm[0] : t.amPm[1]},A: function (e, t) {return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase()},ZZ: function (e) {var t = e.getTimezoneOffset()
                return (t > 0 ? '-' : '+') + k(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4)},Z: function (e) {var t = e.getTimezoneOffset()
              return (t > 0 ? '-' : '+') + k(Math.floor(Math.abs(t) / 60), 2) + ':' + k(Math.abs(t) % 60, 2)}},A = (w('monthNamesShort'), w('monthNames'), {default: 'ddd MMM DD YYYY HH:mm:ss',shortDate: 'M/D/YY',mediumDate: 'MMM D, YYYY',longDate: 'MMMM D, YYYY',fullDate: 'dddd, MMMM D, YYYY',isoDate: 'YYYY-MM-DD',isoDateTime: 'YYYY-MM-DDTHH:mm:ssZ',shortTime: 'HH:mm',mediumTime: 'HH:mm:ss',longTime: 'HH:mm:ss.SSS'}),E = function (e, t, s) {if (void 0 === t && (t = A.default), void 0 === s && (s = {}), 'number' == typeof e && (e = new Date(e)), '[object Date]' !== Object.prototype.toString.call(e) || isNaN(e.getTime()))throw new Error('Invalid Date pass to format');var i = []
              t = (t = A[t] || t).replace(b, (function (e, t) {return i.push(t), '@@@'}));var n = x(x({}, T), s)
              return (t = t.replace(f, (function (t) {return I[t](e, n)}))).replace(/@@@/g, (function () {return i.shift()}))}
          window.setInterval, window.setTimeout;const L = e => e instanceof Function,M = () => /Android/i.test(navigator.userAgent) || /iPhone|iPad/i.test(navigator.userAgent)
          function P (e, {pattern:t, locale:s}) {let i
            i = 'string' == typeof e ? new Date(e) : e;const n = `${i.toLocaleDateString(s,{weekday:"short",month:"short",day:"numeric"}).replace(/,/g,"")}, ${i.toLocaleTimeString(s,{hour:"numeric",minute:"numeric",hour12:!0})}`
            if ('string' == typeof t)try {return E(i, t)} catch(e) {return n }return 'object' == typeof t && null !== t ? i.toLocaleString(s, t) : n}function D (e, t, s = '#000') {const i = t.height,n = t.width,o = Math.floor(i / 2)
            let a = function (e, t) {const s = Math.ceil(t / 2),i = e.length / s,n = [],o = []
              for (let t = 0;t < e.length;t += i) {const s = e.slice(t, t + i).map((e => e * e)).reduce(((e, t) => e + t), 0) / i
                n.push(s), o.unshift(s)}return n.splice(0, 1), o.concat(n)}(e, 31)
            a = function (e, t) {return e.map((e => e * t))}(a, i / 255);const r = t.getContext('2d')
            if (r) {r.fillStyle = s, r.clearRect(0, 0, n, i), r.save();let e = 0
              a.forEach((t => {
                const s = Math.ceil(t / 2) + 1
                r.fillRect(e, o - s, 2, 2 * s), e += 8})), r.save()}}function O (e, t, s, i) {return function (e, t) {const s = Object.keys(t).map((e => `${e}=${t[e]}`))
              return s.length ? `${e}?${s.join("&")}` : e}(`${e}${t}${i}`, s)}function B (e, t, s = !0 , i = 'websdk') {return O(`ws${s?"s":""}://`, e, t, `/chat/v1/chats/sockets/${i}`)}function R (e, t, s = !0) {return O(`http${s?"s":""}://`, e, t, '/chat/v1/chats/message')}const z = (e, t) => {
            const s = new Date(e),i = new Date(t)
            return s.getDate() === i.getDate() && s.getMonth() === i.getMonth() && s.getFullYear() === i.getFullYear()}},473: function (e, t, s) {Object.defineProperty(t, '__esModule', {value: !0}), t.defaultSettings = void 0;var i = s(930),n = s(105),o = 'Please try sharing it again, or else type it in.'
          t.defaultSettings = {badgePosition: {right: '-5px',top: '-5px'},clientAuthEnabled: !1,conversationBeginPosition: 'bottom',disablePastActions: 'all',displayActionsAsPills: !1,embedded: !1,embeddedVideo: !0,enableAttachment: !0,enableAttachmentSecurity: !1,enableHeaderActionCollapse: !0,enableAutocomplete: !1,enableAutocompleteClientCache: !1,enableBotAudioResponse: !1,enableDefaultClientResponse: !1,enableClearMessage: !1,enableEndConversation: !0,enableHeadless: !1,enableLocalConversationHistory: !1,enableLongPolling: !1,enableSecureConnection: !0,enableSpeech: !1,enableSpeechAutoSend: !0,enableTabsSync: !0,enableTimestamp: !0,focusOnNewMessage: 'input',height: '620px',i18n: {en: {agent: 'Agent',agentMessage: '{0} says',attachment_audio: 'Audio attachment',attachment_file: 'File attachment',attachment_image: 'Image attachment',attachment_video: 'Video attachment',attachmentAudioFallback: 'Your browser does not support embedded audio. However you can {0}download it{/0}.',attachmentVideoFallback: 'Your browser does not support embedded video. However you can {0}download it{/0}.',audioResponseOff: 'Turn audio response on',audioResponseOn: 'Turn audio response off',avatarAgent: 'Agent icon',avatarBot: 'Bot icon',avatarUser: 'User icon',card: 'Card {0}',cardImagePlaceholder: 'Card image',cardNavNext: 'Next card',cardNavPrevious: 'Previous card',chatTitle: 'Chat',clear: 'Clear conversation',close: 'Close widget',closing: 'Closing',connected: 'Connected',connecting: 'Connecting',connectionFailureMessage: 'Sorry, the assistant is unavailable right now. If the issue persists, contact your help desk.',connectionRetryLabel: 'Try Again',defaultGreetingMessage: 'Hey, Nice to meet you! Allow me a moment to get back to you.',defaultWaitMessage: "I'm still working on your request. Thank you for your patience!",defaultSorryMessage: "I'm sorry. I can't get you the right content. Please try again.",disconnected: 'Disconnected',download: 'Download',endConversation: 'End Conversation',endConversationConfirmMessage: 'Are you sure you want to end the conversation?',endConversationDescription: 'This will also clear your conversation history.',errorSpeechInvalidUrl: "ODA URL for connection is not set. Please pass 'URI' parameter during SDK initialization.",errorSpeechMultipleConnection: "Another voice recognition is ongoing. Can't start a new one.",errorSpeechTooMuchTimeout: 'The voice message is too long to recognize and generate text.',errorSpeechUnavailable: 'To allow voice messaging, update your browser settings to enable access to your microphone.',errorSpeechUnsupportedLocale: "The locale set for voice recognition is not supported. Please use a valid locale in 'speechLocale' setting.",inputPlaceholder: 'Type a message',imageViewerClose: 'Close image viewer',imageViewerOpen: 'Open image viewer',itemIterator: 'Item {0}',language_ar: 'Arabic',language_de: 'German',language_detect: 'Detect Language',language_en: 'English',language_hi: 'Hindi',language_es: 'Spanish',language_fr: 'French',language_it: 'Italian',language_nl: 'Dutch',language_pt: 'Portuguese',languageSelectDropdown: 'Select chat language',linkField: 'Click on the highlighted text to open Link for {0}',noSpeechTimeout: 'The voice could not be detected to perform recognition.',noText: 'No',openMap: 'Open Map',previousChats: 'End of previous conversation',ratingStar: 'Rate {0} star',recognitionTextPlaceholder: 'Speak your message',relTimeDay: '{0}d ago',relTimeHr: '{0}hr ago',relTimeMin: '{0}min ago',relTimeMoment: 'A few seconds ago',relTimeMon: '{0}mth ago',relTimeNow: 'Now',relTimeYr: '{0}yr ago',requestLocation: 'Requesting location',requestLocationDeniedPermission: 'To allow sharing your location, update your browser settings to enable access to your location. You can also type in the location instead.',requestLocationDeniedTimeout: 'It is taking too long to get your location. ' + o,requestLocationDeniedUnavailable: 'Your current location is unavailable. ' + o,retryMessage: 'Try again',send: 'Send message',shareAudio: 'Share Audio',shareFailureMessage: 'Sorry, sharing is not available on this device.',shareFile: 'Share File',shareLocation: 'Share Location',shareVisual: 'Share Image/Video',skillMessage: 'Skill says',showOptions: 'Show Options',speak: 'Speak a message',typingIndicator: 'Waiting for response',upload: 'Share popup',uploadFailed: 'Upload Failed.',uploadFileSizeLimitExceeded: 'File size should not be more than {0}MB.',uploadFileSizeZeroByte: "Files of size zero bytes can't be uploaded.",uploadUnsupportedFileType: 'Unsupported file type.',userMessage: 'I say',utteranceGeneric: 'Message from skill.',webViewAccessibilityTitle: 'In-widget WebView to display links',webViewClose: 'Done',webViewErrorInfoDismiss: 'Dismiss',webViewErrorInfoText: 'Don’t see the page? {0}Click here{/0} to open it in a browser.',yesText: 'Yes'}},initBotAudioMuted: !0,initMessageOptions: {sendAt: 'expand'},isDebugMode: !1,locale: 'en',messageCacheSizeLimit: 2e3,name: 'oda-chat',openChatOnLoad: !1,openLinksInNewWindow: !1,readMark: '✓',reconnectInterval: 5,reconnectMaxAttempts: 5,shareMenuItems: [n.ShareCategory.AUDIO, n.ShareCategory.FILE, n.ShareCategory.LOCATION, n.ShareCategory.VISUAL],showConnectionStatus: !1,showPrevConvStatus: !0,showTypingIndicator: !0,speechLocale: i.RecognitionLocale.EN_US,theme: n.WidgetTheme.DEFAULT,timestampMode: 'default',defaultGreetingTimeout: 5,defaultWaitMessageInterval: 5,typingIndicatorTimeout: 30,upgradeToWebSocketInterval: 300,webViewConfig: {},width: '375px',actionsLayout: 'vertical',globalActionsLayout: 'vertical',cardActionsLayout: 'vertical',formActionsLayout: 'vertical'}},424: function (e, t, s) {var i = this && this.__assign || function () {return i = Object.assign || function (e) { for (var t,s = 1,i = arguments.length;s < i;s++) for (var n in t = arguments[s])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);return e}, i.apply(this, arguments)}
          Object.defineProperty(t, '__esModule', {value: !0});var n = s(930),o = s(105),a = s(49),r = s(473),c = {avatarAgent: 'agentAvatar',avatarBot: 'botIcon',avatarUser: 'personIcon',fileAudio: 'audioIcon',fileImage: 'imageIcon',fileGeneric: 'fileIcon',fileVideo: 'videoIcon',clearHistory: 'clearMessageIcon',close: void 0,collapse: 'closeIcon',download: 'downloadIcon',error: 'errorIcon',expandImage: 'expandImageIcon',keyboard: 'keyboardIcon',logo: 'logoIcon',launch: 'botButtonIcon',mic: 'micIcon',rating: void 0,send: 'sendIcon',shareMenu: 'attachmentIcon',shareMenuAudio: void 0,shareMenuFile: void 0,shareMenuLocation: void 0,shareMenuVisual: void 0,ttsOff: 'audioResponseOffIcon',ttsOn: 'audioResponseOnIcon',typingIndicator: 'chatBubbleIcon'}
          function l (e) { for (var t = {},s = 0,i = Object.keys(e);s < i.length;s++) {var n = i[s]
              t[n.toLowerCase()] = e[n]}return t}function h (e, t) {var s = i(i({}, e), t)
            if (t.i18n && Object.keys(t.i18n).length) {e.i18n = l(e.i18n), t.i18n = l(t.i18n);var n = new Set
              Object.keys(e.i18n).forEach((function (e) {n.add(e)})), Object.keys(t.i18n).forEach((function (e) {n.add(e)})), s.i18n = {}, n.forEach((function (n) {s.i18n[n] = i(i(i({}, e.i18n.en), e.i18n[n]), t.i18n[n])}))}if (s.colors = i(i({}, e.colors), t.colors), s.userId = t.userId || 'user' + Math.floor(1e4 + 9e4 * Math.random()) + Date.now() % 1e5, s.icons = function (e) {var t = e.icons || {}
                for (var s in c) {var i = c[s]
                  i in e && (t[s] = e[i]) }return t}(s), s.locale = o.configureLocale(s.locale, s.i18n), !s.position) {var a = 'rtl' === window.getComputedStyle(document.body).direction
              s.position = a ? {left: '20px',bottom: '20px'} : {right: '20px',bottom: '20px'}}return s}function d (e, t, s) {var i = Math.floor(window.innerWidth / 2),n = e.offsetLeft
            n < 0 ? e.style.left = '10px' : n > window.innerWidth && (e.style.right = '10px'), n < i && s.addCSSClass(e, 'pos-left')}function p (e, t, s) {if (t) {var i = e.replace(/(\.)([a-zA-Z_-]+)(?=[^}]+{)/gi, '$1' + s + '-$2')
              t.innerText = t.innerText + i}}function u (e, t) {var s,i,c,l,f = this,b = h(r.defaultSettings, e),v = o.generateEventDispatcher(),w = !1,x = b.name,C = new o.DOMUtil(b)
            o.Logger.logLevel = b.isDebugMode ? o.Logger.LOG_LEVEL.DEBUG : o.Logger.LOG_LEVEL.ERROR, o.Logger.appName = b.name, o.Logger.appVersion = o.SDK_VERSION;var S = new o.Logger('main'),y = new n.WebCore({URI: b.URI,channelId: b.channelId,userId: b.userId,isTLS: b.enableSecureConnection,channel: b.channel,enableAttachment: b.enableAttachment,enableAttachmentSecurity: b.enableAttachmentSecurity,isLongPoll: b.enableLongPolling,isTTS: b.enableBotAudioResponse,TTSService: b.ttsService,tokenGenerator: b.clientAuthEnabled ? t : null,recognitionLocale: b.speechLocale,retryInterval: b.reconnectInterval,retryMaxAttempts: b.reconnectMaxAttempts})
            if (b.enableBotAudioResponse)try {b.ttsService || (b.ttsService = y.getTTSService()), b.skillVoices && y.setTTSVoice(b.skillVoices)} catch(e) {S.error('Failed to initialize TTS') }var _ = o.getValues(o.RecognitionLocale),T = function (e) { for (var t = [],s = 1;s < arguments.length;s++)t[s - 1] = arguments[s]
                1 === t.length ? S.error('Parameter ' + t + ' was not passed for ' + e + ' call. No action processed.') : S.error('Parameters ' + t.join(', ') + ' were not passed for ' + e + ' call. No action processed.')},k = function (e) {v.trigger(o.ChatEvent.MESSAGE_SENT, e), v.trigger(o.ChatEvent.MESSAGE, e)},I = function (e) {v.trigger(o.ChatEvent.MESSAGE_RECEIVED, e), v.trigger(o.ChatEvent.MESSAGE, e)},A = function (e) {v.trigger(o.ChatEvent.NETWORK, e)},E = function (e) {var t = l.innerText
                l.innerText = o.updateCSSVar(t, e, '--width-full-screen')},L = function (e) {var t = l.innerText
                t = o.updateCSSVar(t, e.top || 'unset', '--position-top'), t = o.updateCSSVar(t, e.left || 'unset', '--position-left'), t = o.updateCSSVar(t, e.right || 'unset', '--position-right'), t = o.updateCSSVar(t, e.bottom || 'unset', '--position-bottom'), l.innerText = t},M = function (e) {if (s = new o.WidgetComponent(b, C, f.connect.bind(f), f.openChat.bind(f), f.closeChat.bind(f), O.bind(f), I.bind(f), k.bind(f), f.getUnreadMessagesCount.bind(f), A.bind(f), y, v), e)try {var t = document.getElementById(b.targetElement)
                    s.embedInElement(b.targetElement), E(t.clientWidth + 'px'), window.addEventListener('resize', o.debounce((function () {E(t.clientWidth + 'px')}), 500))} catch(e) {S.error('Target Element not specified', e) }
                else {s.appendToElement(document.body);var n = s.element
                  d(n, 0, C), window.addEventListener('resize', o.debounce((function () {d(n, 0, C)}), 500))}i = s.chatWidgetDiv;var a = b.width,r = b.height
                e || (a && f.setWidth(a), r && f.setHeight(r)), b.openChatOnLoad && setTimeout((function () {f.openChat()}), 0)},P = function (e) {var t = b.colors
                return t && (['headerBackground', 'visualizer', 'ratingStarFill'].forEach((function (e) {t[e] = t[e] || t.branding})), ['botText', 'userText'].forEach((function (e) {t[e] = t[e] || t.text})), Object.keys(t).forEach((function (s) {var i = t[s]
                    if (i)if ('shareMenuText' === s)e = o.updateCSSVar(e, i, '--color-popup-button-text')
                      else {var n = '--color-' + s.replace(/([A-Z&])/g, '-$1').toLowerCase()
                        e = o.updateCSSVar(e, i, n)}}))), e},D = function () {v.trigger(o.ChatEvent.READY), D = function () {}}
            this.connect = function (e) {var t,i = void 0 === e ? {} : e,n = i.URI,o = i.channelId,a = i.userId
              return n || o || a ? (function (e, t, s) {'string' == typeof e && e.length && (b.URI = e), 'string' == typeof t && t.length && (b.channelId = t), 'string' == typeof s && s.length && (b.userId = s)}(n, o, a), t = y.connect({URI: n,channelId: o,userId: a})) : t = y.connect(), t.then((function () {S.debug('Connection ready')}), (function () {S.debug('Connection timeout'), s.showConnectionError()})).finally((function () {D()})), t}, this.disconnect = function () {return b.enableSpeech && f.stopVoiceRecording(), b.enableBotAudioResponse && f.cancelTTS(), y.disconnect()}, this.isConnected = function () {return y.isConnected()}, this.openChat = function () {s.isOpen || (s.showChat(), w && (f.connect(), w = !1)), v.trigger(o.ChatEvent.WIDGET_OPENED)}, this.closeChat = function () {s.isOpen && s.onClose(), v.trigger(o.ChatEvent.WIDGET_CLOSED)}, this.endChat = function () {f.isConnected() && s.sendExitEvent()};var O = function () {s.isOpen && f.closeChat(), f.disconnect(), f.clearConversationHistory(), w = !0, v.trigger(o.ChatEvent.CHAT_END)}
            this.isChatOpened = function () {return s.isOpen}, this.destroy = function () { for (var e in f.disconnect(), f.closeChat(), s.remove(), document && l && l.remove(), v.trigger(o.ChatEvent.DESTROY), f.off(), f)f[e] && delete f[e]}, this.on = function (e, t) {v.bind(e, t)}, this.off = function (e, t) {v.unbind(e, t)}, this.sendAttachment = function (e) {return e ? s.uploadFile(e) : (T('sendAttachment', 'file'), Promise.reject())}, this.sendMessage = function (e, t) {return e ? s.sendMessage(e, t) : (T('sendMessage', 'message'), Promise.reject())}, this.updateUser = function (e) {return e ? y.updateUser(e, {sdkMetadata: {version: o.SDK_VERSION}}) : (T('updateUser', 'userDetails'), Promise.reject())}, this.setUserAvatar = function (e) {
              e ? s.setUserAvatar(e) : T('setUserAvatar', 'userAvatar')}, this.setAgentDetails = function (e) {
              e ? s.setAgentDetails(e) : T('setAgentDetails', 'agentDetails')}, this.getAgentDetails = function () {return s.getAgentDetails()}, this.setSkillVoices = function (e) {if (!b.ttsService)return m();var t = []
              return e && !Array.isArray(e) && 'string' == typeof (null == e ? void 0 : e.lang) ? t = [e] : Array.isArray(e) && (t = e), f.setTTSVoice(t)}, this.setTTSService = function (e) {var t = function (e) {return e && o.isFunction(e.speak) && o.isFunction(e.cancel) && o.isFunction(e.getVoice) && o.isFunction(e.getVoices) && o.isFunction(e.setVoice)}(e),i = b.ttsService
              i && (null == i || i.cancel()), t ? (b.ttsService = e, y.setTTSService(e), b.enableBotAudioResponse = !0, o.isAnyVoiceAvailable(e, b.skillVoices).then((function (t) {t || (b.skillVoices = []);var s = o.syncTTSLocaleIfUnavailable({hasRecognition: b.enableSpeech,hasSynthesis: b.enableBotAudioResponse,recognitionLocale: b.speechLocale,synthesisLocales: b.skillVoices})
                e.setVoice(s), b.skillVoices = s}))) : b.ttsService = null, s && s.refreshTTS()}, this.getTTSVoices = function () {return y.getTTSVoices()}, this.setTTSVoice = function (e) {var t = b.ttsService
              return t ? o.isAnyVoiceAvailable(t, b.skillVoices).then((function (t) {return b.skillVoices = o.syncTTSLocaleIfUnavailable({hasRecognition: b.enableSpeech,hasSynthesis: b.enableBotAudioResponse,isReset: t,recognitionLocale: b.speechLocale,synthesisLocales: e}), y.setTTSVoice(e).catch((function () {return m()}))})) : m()}, this.getTTSVoice = function () {try {return y.getTTSVoice()} catch(e) {throw Error(g) }}, this.speakTTS = function (e) {y.speakTTS(e, b.i18n[b.locale])}, this.cancelTTS = function () {y.cancelTTS()}, this.setPrimaryChatLanguage = function (e) {if (null !== e && 'string' != typeof e)throw Error('Please pass a language string or null as argument')
              f.isConnected() ? s.setPrimaryChatLanguage(e) : S.error('Not connected. Can not call setPrimaryChatLanguage.')}, this.setDelegate = function (e) {b.delegate = e}, this.getConversationHistory = function () {var e = s.getMessages()
              return {messages: e,messagesCount: e.length,unreadCount: f.getUnreadMessagesCount(),userId: b.userId}}, this.clearConversationHistory = function (e, t) {void 0 === t && (t = !0), e && 'string' != typeof e ? S.error('Argument passed in clearConversationHistory() is not of type string. Returning without execution.') : (e && 0 !== e.length || (e = b.userId), t && e === b.userId ? s.clearConversationHistory() : s.clearMessages(e, o.StorageType.LOCAL))}, this.clearAllConversationsHistory = function (e) {void 0 === e && (e = !0), s.clearAllMessage(), e && s.clearConversationHistory()}, this.getSuggestions = function (e) {return b.enableAutocomplete ? e ? 'string' != typeof e && 'number' != typeof e ? Promise.reject('Invalid query parameter type passed for the getSuggestions call.') : s.getSuggestions(e) : Promise.reject('No query parameter passed for the getSuggestions call.') : Promise.reject('Autocomplete suggestions not enabled.')}, this.startVoiceRecording = function (e, t, s) {return b.enableSpeech ? e ? t ? y.startRecognition({onRecognitionText: function (t) {e(t.message)},onAnalyserReady: null == s ? void 0 : s.onAnalyserReady,onVisualData: null == s ? void 0 : s.onAnalyserFrequencies,onSpeechNetworkChange: t}) : Promise.reject(new Error('Second callback parameter, onSpeechNetworkChange not provided. Can not start recording')) : Promise.reject(new Error('First callback parameter, onSpeechRecognition not provided. Can not start recording.')) : Promise.reject(new Error('Speech-to-text feature is not enabled. Initialize the widget with enableSpeech: true to use the service.'))}, this.stopVoiceRecording = function () {if (!b.enableSpeech)throw new Error('Speech-to-text feature is not enabled. Speech recognition service is not running.');return y.stopRecognition()}, this.setSpeechLocale = function (e) {if (!b.enableSpeech)return !1;e = e.toLowerCase();var t = _.indexOf(e) >= 0
              if (b.speechLocale = e, y.setRecognitionLocale(e), s.setVoiceRecognitionService(t), t && b.enableBotAudioResponse) {var i = o.syncTTSLocaleIfUnavailable({hasRecognition: b.enableSpeech,hasSynthesis: b.enableBotAudioResponse,recognitionLocale: b.speechLocale,synthesisLocales: b.skillVoices})
                i !== b.skillVoices && (b.skillVoices = i, i.length && y.setTTSVoice(i))}return t}, this.getUnreadMessagesCount = function () {if (b.enableHeadless)return 0;var e = s.getUnreadMsgsCount()
              return e !== c && (c = e, v.trigger(o.ChatEvent.UNREAD, e)), e}, this.setAllMessagesAsRead = function () {b.enableHeadless || (f.getUnreadMessagesCount(), s.updateNotificationBadge(0))}, this.showTypingIndicator = function () {if (!b.showTypingIndicator)throw new Error('Typing indicator is configured not to be shown.');if (b.enableHeadless)throw new Error('Typing indicator cannot be shown in headless mode.');f.isConnected() && s.showTypingIndicator()}, this.setWebViewConfig = function (e) {if (b.enableHeadless)throw new Error('WebView cannot be configured in headless mode.');s.refreshWebView(e)}, this.setUserInputMessage = function (e) {if (b.enableHeadless)throw new Error('User input cannot be set in headless mode.');s.setUserInputMessage(e)}, this.setUserInputPlaceholder = function (e) {if (b.enableHeadless)throw new Error('Placeholder cannot be set in headless mode.')
              e ? s.setUserInputPlaceholder(e) : T('setUserInputPlaceholder', 'placeholder text')}, this.setHeight = function (e) {
              e ? i && (i.style.height = e, b.height = e) : T('setHeight', 'height')}, this.setWidth = function (e) {
              e ? i && (i.style.width = e, b.width = e, E(e)) : T('setWidth', 'width')}, this.setSize = function (e, t) {if (e || t) {var s = i
                s && (s.style.width = e, s.style.height = t, b.width = e, b.height = t, E(e))}else T('setSize', 'width', 'height')}, this.setMessagePadding = function (e) {if (e) for (var t = 0,s = document.getElementsByClassName(x + '-message-bubble');t < s.length;t++)s[t].style.padding = e, b.messagePadding = e;else T('setMessagePadding', 'padding')}, this.setChatBubbleIconHeight = function (e) {if (e) for (var t = 0,s = document.getElementsByClassName(x + '-chat-bubble');t < s.length;t++)s[t].style.height = e, b.height = e;else T('setChatBubbleIconHeight', 'height')}, this.setChatBubbleIconWidth = function (e) {if (e) for (var t = 0,s = document.getElementsByClassName(x + '-chat-bubble');t < s.length;t++)s[t].style.width = e, b.width = e;else T('setChatBubbleIconWidth', 'width')}, this.setChatBubbleIconSize = function (e, t) {if (e || !t) for (var s = 0,i = document.getElementsByClassName(x + '-chat-bubble');s < i.length;s++) {var n = i[s]
                  n.style.width = e, n.style.height = t, b.width = e, b.height = t}else T('setChatBubbleIconSize', 'width', 'height')}, this.setFont = function (e) {
              e ? (p('.wrapper{font:' + e + '}', l, x), b.font = e) : T('setFont', 'font')}, this.setFontFamily = function (e) {
              e ? (p('.wrapper{font-family:' + e + '}', l, x), b.fontFamily = e) : T('setFontFamily', 'fontFamily')}, this.setFontSize = function (e) {
              e ? p('.wrapper{font-size:' + e + '}', l, x) : T('setFontSize', 'fontSize')}, this.setTextColor = function (e) {if (e) {var t = l.innerText
                t = o.updateCSSVar(t, e, '--color-bot-text'), t = o.updateCSSVar(t, e, '--color-user-text'), l.innerText = t}else T('setTextColor', 'color')}, this.setTextColorLight = function (e) {if (e) {var t = l.innerText
                t = o.updateCSSVar(t, e, '--color-text-light'), l.innerText = t, b.colors.textLight = e}else T('setTextColorLight', 'color')}, function () {if (S.debug('onLoad', 'load chat widget'), 'undefined' != typeof window) {var e = !1,t = document.head.children,s = document.createElement('style')
                s.appendChild(document.createTextNode(P(a.redwoodStyles.replace(/(\.)([a-zA-Z_-]+)(?=[^}]+{)/gi, '$1' + x + '-$2')))), l = s, L(b.position); for (var i = 0;i < t.length;i++) {var n = t.item(i)
                  if ('style' === n.nodeName.toLowerCase()) {document.head.insertBefore(s, n), e = !0;break}}e || document.head.appendChild(s), b.font && f.setFont(b.font), b.fontFamily && f.setFontFamily(b.fontFamily), b.fontSize && f.setFontSize(b.fontSize)}M(b.embedded)}(), o.setObjectReadOnly(this);var B = window
            B && 'function' == typeof B.define && B.define.amd && (B.WebSDK = u)}t.default = u;var g = 'Text-to-speech is not available.'
        function m () {return e = g, Promise.reject(Error(e));var e}u.EVENT = o.ChatEvent, u.SPEECH_LOCALE = o.RecognitionLocale, u.THEME = o.WidgetTheme, u.Version = o.SDK_VERSION, o.deepFreeze(u)}},t = {}
    function s (i) {var n = t[i]
      if (void 0 !== n)return n.exports;var o = t[i] = {exports: {}}
      return e[i].call(o.exports, o, o.exports, s), o.exports}s.d = function (e, t) { for (var i in t)s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {enumerable: !0,get: t[i]})}, s.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)}, s.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})};var i = s(424)
    return i = i.default}()}, 'object' == typeof exports && 'object' == typeof module ? module.exports = factory() : 'function' == typeof define && define.amd ? define('WebSDK', [], factory) : 'object' == typeof exports ? exports.WebSDK = factory() : e.WebSDK = factory();self.WebSDK = factory()
