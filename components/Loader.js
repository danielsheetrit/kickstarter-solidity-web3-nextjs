import { Loader as LoadingUi } from 'semantic-ui-react';

export default function Loader() {
  return (
    <LoadingUi
      active
      inline="centered"
      className="loader-itself"
      size="large"
    />
  );
}
