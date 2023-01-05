import { Header } from 'semantic-ui-react';

export default function PageHeader({ title, description }) {
  return (
    <div className="section-container">
      <Header className="section-header-title" as="h2">
        {title}
      </Header>
      <span className="section-header-subtitle">{description}</span>
    </div>
  );
}
