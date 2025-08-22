import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customer = await fetchFilteredCustomers('');
  return (    
    <main>
      <CustomersTable customers={customer} />
    </main> 
  );
}