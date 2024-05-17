import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { supabase } from './lib/superbase';
import Account from './components/Account';
import Auth from './components/Auth';

export default function App() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <View>
        {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
