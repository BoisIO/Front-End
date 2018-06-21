import openSocket from "socket.io-client"
import React, {Component} from "react"
import crypto from 'crypto';
import {JSMpeg} from './jsmpeg'

var certificate = "-----BEGIN CERTIFICATE-----\nMIIEgjCCAmoCCQD7aI4\/obeJGjANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMC\nTkwxFTATBgNVBAgMDFp1aWQtSG9sbGFuZDEOMAwGA1UEBwwFQnJlZGExDzANBgNV\nBAoMBkNpcmNsZTELMAkGA1UECwwCSVQxDzANBgNVBAMMBkNpcmNsZTEdMBsGCSqG\nSIb3DQEJARYOaW5mb0BjaXJjbGUubmwwHhcNMTgwNjIxMTI0ODU2WhcNMTkxMTAz\nMTI0ODU2WjCBgjELMAkGA1UEBhMCTkwxFTATBgNVBAgMDFp1aWQtSG9sbGFuZDEO\nMAwGA1UEBwwFQnJlZGExDzANBgNVBAoMBkNpcmNsZTELMAkGA1UECwwCSVQxDzAN\nBgNVBAMMBlN0cmVhbTEdMBsGCSqGSIb3DQEJARYOaW5mb0BjaXJjbGUubmwwggEi\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDhUv8KWWsy4x\/9zNxHisp+hZgN\nTcv6ai3QShtRQBJfHd0RBjO29UfIil19oT0pbJO6kbaqef6J5qVMaLY+0oTowD8b\nuEdHm4En6ohE9yRucuQoNBsOW78CoDnsQtq3dX7Xq7vN\/CZpmQpsqh+MF+QypO7E\neGMt9ZgPnUzna2RQ9Dr34HAvup1c1lc1Sc4nx862U9Sh0c6YVysPZJLfhwSmUJWp\n8YKGOjlDzjTJLaIT6VCTbOtWWpYrm6EhRc0xaThpZJfKV\/DXDQX5dT54VC+vXqHX\nkH7BvrVSaXIhtirXZ82RUO766nWUJ8EYCbcZa5g6G3k\/uZOJ42AO8TsUFDq1AgMB\nAAEwDQYJKoZIhvcNAQELBQADggIBABYzj4COOdyjrXamJK5yUERRmfDH+Qw+\/9fi\nePekMP+t1yixPeofdfBzfVNB22sIOsxv7tJiSmUuJXBz3tgj\/Cos8uuDwILgsc6B\n3VoR\/JknNRVlnJaVwcHzK0O6+sYh0Eb42uSvNNO4WwOSnO759PJ\/GboyUPXvKnQ5\nKNiSpn7MDWKeVYQXCU7UJFABLptM+24qesiRiea\/Q7ImcCLh+Pv0H\/iVygtBr50K\n2KN0g1Ouui+oF4vPIN6AmkM2cqr3Doori7QwcoFjM09TNgDGsoug6phPcO5v0dOZ\nHvGADr5LUvRnIFrRH0FztUxOWxN\/hFFnCdL2YIEMieHnZkrlvsf9EGukIPyfQsqU\n3VlKo7ZeO8rfdld8IecnJgJJqPQSXnjhWl6bQHaHGVPmxkVQDzGScMFRwOAT1zmb\nc3pfb\/W2+8pGqv87xZpB\/hIuAxPqF0Fx5VUtc\/AVWPMA7WnBtPu2kHvBgiOhIze2\nrTCi+r+7CM\/KiomN\/W3Pb\/dMMLw7Aup\/Mlrt033uXDFGFrtux8bR+wqYcZuhdrUM\nWudz9MydKUr7bR6R7Ce4vYtPCulZeoaa9\/jOBeLqxjLXuDZ4IV2aPQfgKs7EtXne\nd6wXQ05+8WSp0szPz0w5oxURCGTa1+O9SpSwHx24wdisUlcrwqmIBUgk\/DP43kZG\nrD8NyGfI\n-----END CERTIFICATE-----\n";

function verify(data, signature) {
    let verify = crypto.createVerify("RSA-SHA256")
    verify.update(data)
    certificate = certificate.toString()
    signature = signature.toString()
    console.log(signature);
    return verify.verify(certificate, signature, "hex")
  }

class StreamVideo extends Component {
    socket = null
    player = null
    componentDidMount(){
        this.socket = openSocket("http://145.49.53.161:"+this.props.stream.Port+"/")
        //const socket = openSocket("http://145.49.55.236:"+this.props.stream.Port+"/")
        const self = this
        this.socket.on("connect",function(){
            self.socket.emit("f", {
                function:"getStream"
            })
        })
        this.player = new JSMpeg.Player(this.props.stream._id,{
            canvas: this.refs["videocanvas_"+this.props.stream._id]
        })

        this.socket.on("h264", function (data) {
            console.log(verify(data.buffer, data.verify))
            this.socket.emit('end')
            if(data.stream === self.props.stream.User._id) {
                self.player.write(data.buffer)
            }
        })
    }
    componentWillUnmount() {
        this.socket.emit('end', () => {
            this.player = null
        })
    }
    render() {
        return (
            // <iframe title={this.props.stream._id}>
                <canvas style={{backgroundColor:"black"}} ref={"videocanvas_"+this.props.stream._id}></canvas>
            // </iframe>
        )
    }
}

export default StreamVideo