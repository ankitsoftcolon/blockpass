import React, { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
        loadBlockpassWidget()
    }, [])

    const loadBlockpassWidget = () => {
        const blockpass = new window.BlockpassKYCConnect(
          'softcolon_02b02', // service client_id from the admin console
          {
            refId: "BHDQxa54eMAhATY2znpP2CTD5owKxX52sjeKx74pQufP", // assign the local user_id of the connected user
          }
        )
    
        blockpass.startKYCConnect()
    
        blockpass.on('KYCConnectSuccess', () => {
         console.log("Connected");
        })
      }
    
  return (
    <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
    <h1 className="display-5 fw-bold">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3"  id="blockpass-kyc-connect">Verify With Blockpass</button>
      </div>
    </div>
  </div>
  )
}

export default Hero