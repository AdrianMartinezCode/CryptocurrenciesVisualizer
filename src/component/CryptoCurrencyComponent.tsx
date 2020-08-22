import * as React from "react";

type Props = {
  id: string;
  name: string;
};

type State = {
  value: number;
};

export default class CryptoCurrencyComponent extends React.Component<
  Props,
  State
> {
  state: State = {
    value: 0
  };

  newValueCurrency = (value: number) => this.setState({ value: value });

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <h5>{this.state.value}</h5>
      </div>
    );
  }
}
