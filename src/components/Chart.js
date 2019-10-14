import React, { Component, Fragment } from "react";

export default class Chart extends Component {
  formatedSelectedAmount = 0;
  mult = 1;
  getLabels = data => {
    return (
      <Fragment>
        <div className="chart-column chart-column-bold">
          <span>0</span>
        </div>
        <div className="chart-column">
          <span>
            {Math.round(data[0].amount * 0.25 * this.mult) / this.mult}
          </span>
        </div>
        <div className="chart-column">
          <span>
            {Math.round(data[0].amount * 0.5 * this.mult) / this.mult}
          </span>
        </div>
        <div className="chart-column">
          <span>
            {Math.round(data[0].amount * 0.75 * this.mult) / this.mult}
          </span>
        </div>
        <div className="chart-column">
          <span>{this.formatedSelectedAmount}</span>
        </div>
      </Fragment>
    );
  };
  getBarLength = amount => {
    return (amount * 100) / this.formatedSelectedAmount + "%";
  };
  render() {
    const data = this.props.data.sort((a, b) => {
      if (a.amount > b.amount) {
        return -1;
      }
      if (a.amount < b.amount) {
        return 1;
      }
      return 0;
    });
    if (data[0].amount <= 1) {
      this.mult = 10;
    }
    this.formatedSelectedAmount =
      Math.ceil(data[0].amount * this.mult) / this.mult;
    return (
      <div className="chart">
        <div className="chart-title">How {data[0].type} compare</div>
        <div className="chart-description">
          Kilograms of greenhouse gases per serving
        </div>
        <div className="chart-content">
          {data.map(data => {
            return (
              <Fragment>
                <div className="label">
                  <img src={data.image} />
                  <span
                    className={"label-name " + (data.selected ? "bold" : "")}
                  >
                    {data.name}
                  </span>
                </div>
                <div
                  className={
                    "chart-bar " + (data.selected ? "chart-bar-main" : "")
                  }
                  style={{ width: this.getBarLength(data.amount) }}
                />
              </Fragment>
            );
          })}
          <div className="chart-columns">{this.getLabels(data)}</div>
        </div>
      </div>
    );
  }
}