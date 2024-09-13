import { CustomDataTable } from '@/shared-components/CustomDataTable'
import { columns, tableData } from './options'

const DataTableexample = () => {
	return <CustomDataTable columns={columns} tableData={tableData} />
}

export default DataTableexample
