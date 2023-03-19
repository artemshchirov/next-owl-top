export const debounce = <T extends (...args: unknown[]) => void>(
	fn: T,
	ms = 20
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>;
	return (...args: Parameters<T>): void => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(this, args), ms);
	};
};
