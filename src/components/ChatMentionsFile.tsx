import { FC, useEffect, useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'

type ReactMentionEvent = {
    target: {
        value: string
    }
}

interface ChatMessage {
    id: number
    name: string
    message: string
    avatar: string
    date: string
}
export const ChatMentionsFile: FC = () => {
    const [chatValue, setChatValue] = useState<string>('')
    const [filesMatches, setFilesMatches] = useState<string[]>([])
    const [textParsed, setTextParsed] = useState<string>('')

    const [myMessages, setMyMessages] = useState<ChatMessage[]>([])
    const regex = /@\[(.*?)\]/g
    const textAreaStyles = {
        control: {
            fontSize: 14,
            fontWeight: 'normal',
        },

        '&multiLine': {
            highlighter: {
                padding: 9,
            },
            input: {
                padding: 10,
            },
        },

        '&singleLine': {
            display: 'inline-block',
            width: 180,

            highlighter: {
                padding: 1,
            },
            input: {
                padding: 1,
            },
        },

        suggestions: {
            list: {
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: 8,
                fontSize: 14,
                position: 'absolute',
                top: -130,
                maxHeight: 100,
                minHeight: 100,
                overflowY: 'auto',
            },
            item: {
                display: 'flex',
                alignItems: 'center',
                padding: '5px 15px',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
                color: '#A25AFF',
                '&focused': {
                    backgroundColor: '#f5f5f5',
                },
            },
        },
    }
    const onChangeChat = (ev: ReactMentionEvent) => {
        setChatValue(ev.target.value)
    }

    const onKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
        ev.stopPropagation()

        if (ev.key === 'Enter') {
            ev.preventDefault()
            // const filesNoDuplicated = [...new Set(filesMatches)]
            setMyMessages([
                ...myMessages,
                {
                    id: myMessages.length + 1,
                    name: 'Luis',
                    message: textParsed,
                    avatar: 'https://i.pravatar.cc/300?img=3',
                    date: new Date().toString(),
                },
            ])
            setChatValue('')
            setFilesMatches([])
        }
    }

    const chatMock = [
        {
            id: 1,
            name: 'John Doe',
            message: 'Hello world',
            avatar: 'https://i.pravatar.cc/300?img=1',
            date: new Date().toString(),
        },
        {
            id: 2,
            name: 'Jane Doe',
            message: 'Hello world',
            avatar: 'https://i.pravatar.cc/300?img=2',
            date: new Date().toString(),
        },
    ]

    const filesMock = [
        'LuisCV.pdf',
        'LuisCV2.pdf',
        'MariaCV.pdf',
        'MariaCV2.pdf',
        'GamoraCV.pdf',
        'GamoraCV2.pdf',
    ]

    useEffect(() => {
        const textModified = chatValue.replace(regex, (match, fileName) => {
            setFilesMatches([...filesMatches, fileName])
            return fileName
        })
        setTextParsed(textModified)
    }, [chatValue])
    return (
        <div className='w-full max-w-[600px] border border-neutral-900 py-4'>
            <div>
                <div className='flex flex-col gap-y-4 p-4 min-h-[500px]'>
                    {chatMock.map(({ id, avatar, message, name }) => (
                        <div key={id} className='flex items-center gap-x-4'>
                            <div>
                                <img src={avatar} alt={name} className='h-10 w-10 rounded-full' />
                            </div>
                            <div className='border border-neutral-900 bg-neutral-50 min-w-[200px] p-2'>
                                <div>
                                    <span className='text-xs text-neutral-600'>{name}</span>
                                </div>
                                <div>
                                    <p className='text-sm'>{message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {myMessages.length &&
                        myMessages.map(({ id, avatar, message, name }) => (
                            <div key={id} className='self-end flex items-center gap-x-4'>
                                <div className='border border-neutral-900 bg-neutral-50 min-w-[200px] p-2'>
                                    <div>
                                        <p className='text-sm'>{message}</p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={avatar}
                                        alt={name}
                                        className='h-10 w-10 rounded-full'
                                    />
                                </div>
                            </div>
                        ))}
                </div>
                <div className='w-full px-4'>
                    <MentionsInput
                        value={chatValue}
                        onChange={onChangeChat}
                        className='border border-neutral-900'
                        style={textAreaStyles}
                        onKeyPress={onKeyPress}
                    >
                        <Mention
                            trigger='@'
                            data={filesMock.map((file) => ({ id: file, display: file }))}
                            renderSuggestion={(suggestion, search, highlightedDisplay) => (
                                <div className='user'>{highlightedDisplay}</div>
                            )}
                            style={{ color: '#A25AFF', zIndex: 2000, position: 'relative' }}
                            appendSpaceOnAdd={true}
                            markup='@[__id__]'
                        />
                    </MentionsInput>
                </div>
            </div>
        </div>
    )
}
