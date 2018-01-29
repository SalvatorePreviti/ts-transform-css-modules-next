import './Visualizer.styl'

/*
 * This is example of Inferno functional component
 * Functional components provide great performance but does not have state
 */
export function Visualizer({ number: number }) {
  return (
    <div styleName="test" className="test">
      {number}
    </div>
  );
}
