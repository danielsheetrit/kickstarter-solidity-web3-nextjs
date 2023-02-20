import { useMemo } from 'react';
import { Link } from '../routes';
import { Container, Icon, Message as MassageCard } from 'semantic-ui-react';

export default function Message({
  iconName,
  bodyTxt,
  linkTxt,
  linkPath,
  mode, // type of string
  setOpen,
}) {
  const currentMode = useMemo(() => ({ [mode]: !!mode }), [mode]);
  const onDismiss = useMemo(() =>
    setOpen ? { onDismiss: () => setOpen(false) } : null
  );

  return (
    <MassageCard {...currentMode} {...onDismiss}>
      <Container style={{ display: 'flex', alignItems: 'center' }}>
        {iconName && (
          <Icon
            name={iconName}
            color="grey"
            style={{ marginRight: 20, fontSize: 26 }}
          />
        )}
        <Container>
          <p style={{ marginBottom: 0 }}>{bodyTxt}</p>

          {linkTxt && <Link route={linkPath}>{linkTxt}</Link>}
        </Container>
      </Container>
    </MassageCard>
  );
}
