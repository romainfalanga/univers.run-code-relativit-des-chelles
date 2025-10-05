import { supabase } from '../lib/supabase';

const SESSION_ID_KEY = 'user_session_id';

function getSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

function getParentPaths(pagePath: string): string[] {
  const parts = pagePath.split('/').filter(Boolean);
  const parentPaths: string[] = [];

  for (let i = 1; i < parts.length; i++) {
    parentPaths.push('/' + parts.slice(0, i).join('/'));
  }

  return parentPaths;
}

export async function markPageAsVisited(pagePath: string): Promise<void> {
  const sessionId = getSessionId();
  const allPaths = [pagePath, ...getParentPaths(pagePath)];

  try {
    const existingVisits = await supabase
      .from('page_visits')
      .select('page_path')
      .eq('session_id', sessionId)
      .in('page_path', allPaths);

    if (existingVisits.error) {
      console.error('Error checking existing visits:', existingVisits.error);
      return;
    }

    const existingPaths = new Set(existingVisits.data?.map(v => v.page_path) || []);
    const pathsToInsert = allPaths.filter(path => !existingPaths.has(path));

    if (pathsToInsert.length > 0) {
      const records = pathsToInsert.map(path => ({
        session_id: sessionId,
        page_path: path,
        visited_at: new Date().toISOString()
      }));

      const { error } = await supabase
        .from('page_visits')
        .insert(records);

      if (error) {
        console.error('Error marking pages as visited:', error);
      }
    }
  } catch (error) {
    console.error('Error in markPageAsVisited:', error);
  }
}

export async function isPageVisited(pagePath: string): Promise<boolean> {
  const sessionId = getSessionId();

  try {
    const { data, error } = await supabase
      .from('page_visits')
      .select('id')
      .eq('session_id', sessionId)
      .eq('page_path', pagePath)
      .maybeSingle();

    if (error) {
      console.error('Error checking if page is visited:', error);
      return false;
    }

    return data !== null;
  } catch (error) {
    console.error('Error in isPageVisited:', error);
    return false;
  }
}

export async function getVisitedPages(): Promise<string[]> {
  const sessionId = getSessionId();

  try {
    const { data, error } = await supabase
      .from('page_visits')
      .select('page_path')
      .eq('session_id', sessionId);

    if (error) {
      console.error('Error getting visited pages:', error);
      return [];
    }

    return data?.map(v => v.page_path) || [];
  } catch (error) {
    console.error('Error in getVisitedPages:', error);
    return [];
  }
}
