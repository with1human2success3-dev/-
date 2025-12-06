"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F1EB]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-[#1C1C1C]">
              오류가 발생했습니다
            </h1>
            <p className="text-[#8B7355] mb-4">
              페이지를 새로고침해주세요.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
              }}
              className="px-6 py-3 bg-[#1C1C1C] text-[#F5F1EB] rounded hover:bg-[#8B7355] transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


