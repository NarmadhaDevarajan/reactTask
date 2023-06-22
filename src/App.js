import React from 'react'
import { CSSProperties } from 'react'
import { CssStyleClass } from '@fortawesome/fontawesome-svg-core'

function List(props)
{
  return(
    <div>✔{props.name}</div>
  )
}
function Item(props)
{
  return(
    <div>×{props.name}</div>
  )
}

function App() {

  return (
   
<section className="pricing py-5" background-color="#007bff" background="linear-gradient(to right, #0062E6, #33AEFF)">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0" border="none" border-radious="1rem" transition="all 0.2s" box-shadow="0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center" margin="0.5rem 0" font-size= "0.9rem" letter-spacing=" .1rem" font-weight="bold">Free</h5>
            <h6 className="card-price text-center" hover="opacity-1" font-size= "3rem"  margin="0" >$0<span className="period" font-size="0.8rem">/month</span></h6>
            {/* <hr> */}
            <ul className="fa-ul" margin-bottom="1rem">
              <List name="Single User" />
              <List name="5GB Storage"/>
              <List name="Unlimited Public Projects"/>
              <List name="Community Access"/>
              <Item name="Unlimited Private Projects" />
              <Item  name="Dedicated Phone Support" />
              <Item  name="Free Subdomain" />
              <Item  name="Monthly Status Reports" />
            </ul>
            {/* </hr> */}
            <div className="d-grid" >
              <button className = "btn btn-primary text-uppercase" font-size="80%"  border-radius=" 5rem" letter-spacing=".1rem" font-weight= "bold" padding="1rem" opacity="0.7" transition= "all 0.2s">Button</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4" >
        <div className="card mb-5 mb-lg-0" background-color="#007bff" background="linear-gradient(to right, #0062E6, #33AEFF)">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center" margin="0.5rem 0" font-size= "0.9rem" letter-spacing=" .1rem" font-weight="bold">Plus</h5>
            <h6 className="card-price text-center"  hover="opacity-1" font-size= "3rem"  margin="0">$9<span className="period">/month</span></h6>
            {/* <hr> */}
            <ul className="fa-ul">
              <List name=<strong>{"5 Users"}</strong> />
              <List name="50GB Storage" />
              <List name="Unlimited Public Projects" />
              <List name="Community Access" />
              <List name="Unlimited Private Projects"/>
              <List name="Dedicated Phone Support" />
              <List name="Free Subdomain" />
              <Item name="Monthly Status Reports" />
            </ul>
            {/* </hr> */}
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase" font-size="80%"  border-radius=" 5rem" letter-spacing=".1rem" font-weight= "bold" padding="1rem" opacity="0.7" transition= "all 0.2s">Button</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            {/* <hr> */}
            <ul className="fa-ul">
              <List ><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong></List>
              
              <List><span className="fa-li"><i className="fas fa-check" name= "150GB Storage"></i></span></List>
              <List><span className="fa-li"><i className="fas fa-check" name= "Unlimited Public Projects"></i></span></List>
              <List><span className="fa-li"><i className="fas fa-check" name= "Community Access"></i></span></List>
              <List><span className="fa-li"><i className="fas fa-check" name= "Unlimited Private Projects"></i></span></List>
              <List><span className="fa-li"><i className="fas fa-check" name= "Dedicated Phone Support"></i></span></List>
              <List><span className="fa-li"><i className="fas fa-check" name= "Unlimited Free Subdomains"></i></span><strong></strong> </List>
              <Item><span className="fa-li"><i className="fas fa-check" name="Monthly Status Reports"></i></span></Item>
            </ul>
            {/* </hr> */}
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase" font-size="80%"  border-radius=" 5rem" letter-spacing=".1rem" font-weight= "bold" padding="1rem" opacity="0.7" transition= "all 0.2s">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default App






