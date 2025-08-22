import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customer = await fetchFilteredCustomers('');
  return (    
    <main>
      <Suspense fallback={<p>Loading...</p>}> 
      <CustomersTable customers={customer} />
      </Suspense>
    </main> 
  );
}