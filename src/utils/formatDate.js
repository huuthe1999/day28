const date = new Date();
let options = {
	year: 'numeric',
	month: 'short',
	hour: '2-digit',
	minute: '2-digit',
	hourCycle: 'h24',
	hour12: true,
};
export default new Intl.DateTimeFormat('en-US', options).format(date);
