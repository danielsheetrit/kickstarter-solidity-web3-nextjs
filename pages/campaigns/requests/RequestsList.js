import { useState } from 'react';
import { Table } from 'semantic-ui-react';

import Message from '../../../components/Message';
import RequestRow from '../../../components/RequestRow';

export default function RequestsList({ requests, address, approversCount }) {
  const [open, setOpen] = useState(false);
  const [msgConfig, setMsgConfig] = useState({ txt: '', mode: '' });

  return (
    <>
      <p style={{ textDecoration: 'underline' }}>{`Found ${requests?.length || 0} Requests`}</p>

      <Table style={{ width: '100%' }} basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Recipient</Table.HeaderCell>
            <Table.HeaderCell>Approval Count</Table.HeaderCell>
            <Table.HeaderCell>Approve</Table.HeaderCell>
            <Table.HeaderCell>Finzlize</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {requests && requests.map((request, index) => {
            return (
              <RequestRow
                key={index}
                request={request}
                requestId={index}
                address={address}
                approversCount={approversCount}
                setMsgConfig={setMsgConfig}
                setOpen={setOpen}
              />
            );
          })}
        </Table.Body>
      </Table>

      {open && (
        <Message
          setOpen={setOpen}
          bodyTxt={msgConfig.txt}
          mode={msgConfig.mode}
        />
      )}
    </>
  );
}
