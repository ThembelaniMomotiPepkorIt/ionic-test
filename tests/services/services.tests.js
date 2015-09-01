describe('Chats unit test', function(){
	var chats;

	beforeEach(module('starter.services'));

	beforeEach(inject(function (_Chats_){
		chats = _Chats_;
	}));

	it('can get an instance', inject(function (_Chats_){
		expect(chats).toBeDefined();
	}));

	it('has 5 chats', inject(function (_Chats_){
		expect(chats.all().length).toEqual(5);
	}));

	it('has a friend called max with id 1', inject(function (_Chats_){
		var oneFriend = {
			id: 1,
    		name: 'Max Lynx',
		    lastText: 'Hey, it\'s me',
		    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
		};

		expect(chats.get(1).name).toEqual(oneFriend.name);
	}))
});