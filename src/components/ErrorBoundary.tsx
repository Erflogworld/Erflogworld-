import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React Error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12 text-[#272532] font-poppins">
          <div className="max-w-md w-full text-center p-8 rounded-2xl border border-gray-200 shadow-xl">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center text-[#8549C2]">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold font-montserrat text-[#272532] mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              We encountered a minor display issue loading the page. Please click reload to refresh the application.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#8549C2] hover:bg-[#6c34a3] text-white font-medium rounded-xl transition-colors shadow-lg cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
