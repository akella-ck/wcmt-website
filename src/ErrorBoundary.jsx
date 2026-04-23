import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
          <h2>Application error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#a00' }}>{String(this.state.error)}</pre>
          {this.state.info && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.info.componentStack}
            </details>
          )}
          <button onClick={() => window.location.reload()} style={{ marginTop: 12 }}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
