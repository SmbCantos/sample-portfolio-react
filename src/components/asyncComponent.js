import React, { Component } from 'react';

const asyncComponent = importComponent => {
  class AsyncComponent extends Component {
    state = { component: null };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({ component });
    }

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
