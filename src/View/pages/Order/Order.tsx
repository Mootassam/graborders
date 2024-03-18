
function Portfolio() {

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
        <div className="header_order">
          <div className="order__header">
            <div className="order__record">
              Order Record
            </div>
          </div>
          <div className="order__background">
            <div className="order__remaining">
              <label htmlFor="" className="remaining__assets"> Remaining Availalbe assets</label>
              <span className="remaining__amount">5000.32</span>
            </div>
          </div>
        </div>

        <div className="order__list">

          <div className="list__actions">
            <div>
              <span className="active__order">All</span>
            </div>
            <div>             <span>Pending</span></div>
            <div>             <span>Completed</span></div>
            <div>             <span>Canceled</span></div>
          </div>
        </div>

        <div className="list__product">

          {Array.from(({ length: 5 })).map(() => <div className="single__product">
            <div className="order__time">
              <div>Order Time: 2022-06-27 14:03:52</div>
              <div>Order Number: N02206271321321354165</div>
            </div>
            <div className="badge__ completed">
              <label>Completed</label></div>
            <div className="product__image">

              <div className="image__"></div>

              <div className="product__detail">
                <div className="detail__name">Van Hueusen Men's Slim Fir Never Tuck Short Sleeve Button Down Shirt</div>
                <div className="detail__price">
                  <div> 100.82</div>
                  <div>X 1</div>
                </div>
              </div>

            </div>


            <div className="bottom__cadre">

              <div className="cadre__detail">
                <div>Total order amount</div>
                <div>100.82</div>
              </div>

              <div className="cadre__detail">
                <div>Commission</div>
                <div>0.26</div>
              </div>

              <div className="cadre__detail">
                <div>Estimated return</div>
                <div>101.08</div>
              </div>
            </div>
          </div>)}

        </div>




        <div className="no__moredata">
          <span>no more data</span>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
