import React from 'react'

function Card({coinName,currentPrice,marketCap,high24Hrs,marketcapRank,low24Hrs}) {
  return (
    <div>
    <div className="fs-1 fw-bold m-3 text-Capitalize"
        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
        {coinName}
    </div>
    <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap</h6>
                <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                    {marketCap} %
                </p>
            </div>
        </div>
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap Rank</h6>
                <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                    ${marketcapRank}
                </p>
            </div>
        </div>
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap</h6>
                <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                    ${marketCap}
                </p>
            </div>
        </div>

        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Current Price </h6>
                <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                    {currentPrice} %
                </p>
            </div>
        </div>
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> High 24Hrs </h6>
                <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                    ${high24Hrs}
                </p>
            </div>
        </div>
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Low 24Hrs </h6>
                <p className="card-text fw-bold fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                    ${low24Hrs}
                </p>
            </div>
        </div>
    </section>
    <div>
        <div className="text-white text-center"
            style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" ,marginBottom:"15px" }}><h1>Current
            Price</h1></div>
        <div style={{
            fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
            fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
            textAlign: 'center'
        }}>
            ${currentPrice}
        </div>
    </div>
</div>
  )
}

export default Card