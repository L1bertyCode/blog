import { PageError } from "@/widjets/PageError";
import {
 Component,
 ErrorInfo,
 ReactNode,
 Suspense,
} from "react";
interface ErrorBoundaryProps {
 children: ReactNode;
}

interface ErrorBoundaryState {
 hasError: boolean;
}

export class ErrorBoundary extends Component<
 ErrorBoundaryProps,
 ErrorBoundaryState
> {
 constructor(props: ErrorBoundaryProps) {
  super(props);
  this.state = { hasError: false };
 }

 static getDerivedStateFromError(error: Error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true };
 }

 componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  // You can also log the error to an error reporting service
  console.log(error, errorInfo);
 }

 render() {
  if (this.state.hasError) {
   // You can render any custom fallback UI
   return (
    <Suspense fallback="">
     <PageError />
    </Suspense>
   );
  }

  return this.props.children;
 }
}
