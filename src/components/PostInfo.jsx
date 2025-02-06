import React, {useState, useEffect} from 'react';

const mockPostData = {
    1: {
        content: '이것은 1번 게시글의 내용입니다.',
        answer: '이것은 1번 게시글의 답변입니다.',
    },
    2: {
        content: '이것은 2번 게시글의 내용입니다.',
        answer: '이것은 2번 게시글의 답변입니다.',
    },
    3: {
        content: '이것은 3번 게시글의 내용입니다.',
        answer: '이것은 3번 게시글의 답변입니다.',
    },
};

const PostInfo = ({postId, useMock = false}) => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            if (useMock) {
                // Mock 데이터 사용
                setPostData(mockPostData[postId]);
                // console.log(postId);
            } else {
                try {
                    const response = await fetch(`https://example.com/posts/${postId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch post data');
                    }

                    const data = await response.json();
                    setPostData(data);
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            }
        };

        fetchPostData();
    }, [postId, useMock]);

    if (!postData) return <div>Loading...</div>;

    return (
        <>
            <div>
                <h2>게시글 내용</h2>
                <p>{postData.content}</p>
            </div>
            <div>
                <h2>답변 내용</h2>
                <p>{postData.answer}</p>
            </div>
        </>
    );
};

export default PostInfo;
