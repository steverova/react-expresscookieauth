import { nanoid } from 'nanoid'

const generateId = (n = null) => {
	return n === null ? nanoid() : nanoid(n)
}

export default generateId
