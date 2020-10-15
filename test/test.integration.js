import test from 'ava';
import Node from '../src/background/Node';

test.todo('Setup ci')

test.skip('Lets test!', async t => {
  const options = {
    rendezvousIp: 'jsrc-bootstrap.goelzer.io',
    rendezvousPort: '443',
    wallet: '',
  }
  
  const node1 = await Node.create(options); 
  const node2 = await Node.create(options);  
});

